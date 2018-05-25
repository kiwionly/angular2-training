import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageComponent } from './components/post-page/post-page.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'posts', component: PostPageComponent },
  { path: 'customers', loadChildren: './modules/customer/customer.module#CustomerModule', canActivate: [LoginGuard]},
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
