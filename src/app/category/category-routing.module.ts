import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './list/list.component';
import { CategoryDetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'list', component: CategoryListComponent },
  { path: 'add', component: CategoryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
