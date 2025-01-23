import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './list/list.component';
import { ProductDetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'add', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}