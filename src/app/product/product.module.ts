import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductDetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './list/list.component';
import { ProductRoutingModule } from './product-routing.module';
import { NgSelectComponent } from '@ng-select/ng-select';
import { CommonSharedModule } from '../core/shared-module/common-shared.module';
import { HtmlComponentModule } from '../core/input-fields-component/html-component.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    //NumericValidatorDirective,
    //DecimalValidatorDirective,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    DatePipe,
    CommonSharedModule,
    NgSelectComponent,
    HtmlComponentModule
  ]
})
export class ProductModule { }
