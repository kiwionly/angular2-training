import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { LoginGuard } from '../../login.guard';
import { CustomerInputPageComponent } from './components/customer-input-page/customer-input-page.component';
import { CustomerReactiveFormComponent } from './components/customer-reactive-form/customer-reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'add', component: CustomerInputPageComponent},
  { path: 'add2', component: CustomerReactiveFormComponent},
  { path: 'list', component: CustomerListPageComponent, canDeactivate: [LoginGuard] },
  { path: ':id', component: CustomerDetailPageComponent, canDeactivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }

export const routedComponents = [CustomerListPageComponent];
