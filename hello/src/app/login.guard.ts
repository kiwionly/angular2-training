import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerDetailPageComponent } from './modules/customer/components/customer-detail-page/customer-detail-page.component';

export interface IExit {
  after();
}


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanDeactivate<IExit> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canDeactivate(
    component: IExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    component.after();

    return true;
  }

}
