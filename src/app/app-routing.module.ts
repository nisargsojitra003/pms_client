import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: SidebarComponent, // Add the HomeComponent route
  },
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent, // Wildcard route for 404
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
