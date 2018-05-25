import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerInputPageComponent } from './components/customer-input-page/customer-input-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, CustomerRoutingModule, FormsModule
  ],
  declarations: [CustomerListPageComponent, CustomerDetailPageComponent, CustomerInputPageComponent,]
})
export class CustomerModule { }
