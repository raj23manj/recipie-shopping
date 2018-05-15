import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
//import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  // constructor(private authService: AuthService){}
  constructor(private store: Store<fromApp.AppState>){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // return this.authService.isAuthenticated();
    // take only one request, if not it will run infinetly
    return this.store.select('auth').take(1).map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }
}
