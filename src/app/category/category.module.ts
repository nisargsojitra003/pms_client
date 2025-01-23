import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './list/list.component';
import { CategoryDetailComponent } from './detail/detail.component';
import { CategoryRoutingModule } from './category-routing.module'; // Import the routing module
import { MaterialModule } from '../material.module';
import { CommonSharedModule } from '../core/shared-module/common-shared.module';

@NgModule({
  declarations: [CategoryListComponent, CategoryDetailComponent],
  imports: [
    CategoryRoutingModule,
    CommonModule,
    MaterialModule,
    CommonSharedModule,
  ],
})
export class CategoryModule {}
