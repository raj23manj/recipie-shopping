import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import * as firebase from 'firebase';
//to convert a promise to observable
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {
  //@Effect({dispatch: false}) // which means we only want to execute asynchronous call but do not want to dispatch
  // in the end the return should be there like mergeMap for below

  @Effect() // which means we need to dispactch a new effect see below
  authSignup = this.actions$  // for certain type
                  // similar to reducers, check for type but instead of changing state we chai observable
                   .ofType(AuthActions.TRY_SIGNUP)
                   .map((action: AuthActions.TrySignup) => {
                     return action.payload;
                   })
                   .switchMap((authData: { username: string, password: string }) => {
                      //need to convert a promise to observable
                      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
                   })
                   .switchMap(() => { // switchmap dose not wrap it into a observable
                     return fromPromise(firebase.auth().currentUser.getIdToken());
                   })
                  //  .map((token: string) => { // map wraps it into a observable
                  //     return {
                  //       type:
                  //     };
                  //  })
                  // at the end of effects chain we dispatch a new effect
                  .mergeMap((token: string) => { // merges multiple things into one observable
                    // type and payload are reserver, and this is to be used
                    // returning actions/ dispatching actions
                     return [{
                                type: AuthActions.SIGNUP
                              },
                              {
                                type: AuthActions.SET_TOKEN,
                                payload: token
                              }
                            ]; // sent back as observable so that ngrx handles it as effects
                  });

  @Effect()
  authSigin = this.actions$
              .ofType(AuthActions.TRY_SIGNIN)
              .map((action: AuthActions.TrySignup) => {
                return action.payload;
              })
              .switchMap((authData: { username: string, password: string }) => {
                 //need to convert a promise to observable
                 return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
              })
              .switchMap(() => {
                return fromPromise(firebase.auth().currentUser.getIdToken());
              })
             .mergeMap((token: string) => {
                return [{
                           type: AuthActions.SIGNIN
                         },
                         {
                           type: AuthActions.SET_TOKEN,
                           payload: token
                         }
                       ];
             });

  // to inject actions we use Injectable, and the ngrx/effects is automatically able to
  // retrive the actions from application states/store

  // $ => represents it is a observable
  constructor(private actions$: Actions) {
  // actions$ here is the the list of all actions that we have in our app (shopping, auth ...)
  }
}
