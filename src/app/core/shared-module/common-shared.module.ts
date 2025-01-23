import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { PageHeaderComponent } from '../layout/page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[PageHeaderComponent]
})
export class CommonSharedModule { }
