import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router){

  }

  signupUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error));
  }

  signinUser(email: string, password: string){
    // console.log('fine');
    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
              this.router.navigate(['/']);
              console.log(response)
              firebase.auth().currentUser.getToken()
                      .then(token => {
                        this.token = token;
                      });
            })
            .catch(error => console.log(error));
  }

  getToken(){
    firebase.auth().currentUser.getToken()
                    .then((response) => {
                      console.log(response)
                      firebase.auth().currentUser.getToken()
                              .then(token => {
                                this.token = token;
                              });
                    });

    return this.token;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  isAuthenticated(){
    return this.token != null;
  }

}
