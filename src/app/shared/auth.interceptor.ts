
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // by default requests are immutable(CAN'T EDIT) hevce clone request
    console.log('Intercepted!', req);
    // we can only read not write, hence we can send an object to clone
    const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    //const copiedReq = req.clone({headers: req.headers.append('', '')});
    return next.handle(copiedReq);
  }
}
