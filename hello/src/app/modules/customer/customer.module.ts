import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerInputPageComponent } from './components/customer-input-page/customer-input-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerReactiveFormComponent } from './components/customer-reactive-form/customer-reactive-form.component';

@NgModule({
  imports: [
    CommonModule, CustomerRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [CustomerListPageComponent, CustomerDetailPageComponent, CustomerInputPageComponent, CustomerReactiveFormComponent,]
})
export class CustomerModule { }
