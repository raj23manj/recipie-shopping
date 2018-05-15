import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  //private authService: AuthService
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    //this.authService.signinUser(email, password);
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
  }

}
