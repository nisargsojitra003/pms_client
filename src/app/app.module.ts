import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  NgFor,
  NgIf,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { ActiveClassOnRouteDirective } from './core/directives/active-class-on-route.directive';
import { ProductModule } from './product/product.module';
import { TopbarComponent } from './core/layout/topbar/topbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { AppmenuComponent } from './core/layout/appmenu/appmenu.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'MM-DD-YYYY',
  },
  display: {
    dateInput: 'MM-DD-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MM-DD-YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    AppmenuComponent,
    ActiveClassOnRouteDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DatePipe,
    CurrencyPipe,
    FormsModule,
    NgSelectModule,
    AsyncPipe,
    ProductModule,
  ],
  providers: [
    provideAnimationsAsync('noop'),
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }, // Set locale
   
    // { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
//{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
