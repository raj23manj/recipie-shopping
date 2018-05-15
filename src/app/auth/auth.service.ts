// not used anymore, but keeping for my reference

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {

  //token: string;

  constructor(private router: Router, private store: Store<fromAuth.AppState>){

  }

  signupUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
              this.store.dispatch(new AuthActions.Signup());
            })
            .catch(error => console.log(error));
  }

  signinUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
              this.store.dispatch(new AuthActions.Signin());
              this.router.navigate(['/']);
              console.log(response)
              firebase.auth().currentUser.getToken()
                      .then(token => {
                        //this.token = token;
                        this.store.dispatch(new AuthActions.SetToken(token));
                      });
            })
            .catch(error => console.log(error));
  }

  // getToken(){
  //   firebase.auth().currentUser.getToken()
  //                   .then((response) => {
  //                     console.log(response)
  //                     firebase.auth().currentUser.getToken()
  //                             .then(token => {
  //                               this.token = token;
  //                             });
  //                   });
  //
  //   return this.token;
  // }

  logout(){
    firebase.auth().signOut();
    //this.token = null;
    this.store.dispatch(new AuthActions.Logout());
  }

  // isAuthenticated(){
  //   return this.token != null;
  // }

}
