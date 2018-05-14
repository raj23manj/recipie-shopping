
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
//import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 //private authService: AuthService,
  constructor( private store: Store<fromApp.AppState>){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // by default requests are immutable(CAN'T EDIT) hevce clone request
    console.log('Intercepted!', req);
    //// we can only read not write, hence we can send an object to clone
    //const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    ////const copiedReq = req.clone({headers: req.headers.append('', '')});
    //return next.handle(copiedReq);

    // map will return an observable and wrap the return into a new observable,
    // by using switchMap it wont wrap
    return this.store.select('auth')
               .take(1) // only get this value once, after once it will unsubscribe
               .switchMap((authState: fromAuth.State) => {
                  const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
                  return next.handle(copiedReq);
               })
  }
}
