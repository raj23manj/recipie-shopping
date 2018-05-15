import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$  // for certain type
                   .ofType(AuthActions.TRY_SIGNUP)
                   ;

  // to inject actions we use Injectable, and the ngrx/effects is automatically able to
  // retrive the actions from application states/store

  // $ => represents it is a observable
  constructor(private actions$: Actions) {
  // actions$ here is the the list of all actions that we have in our app (shopping, auth ...)
  }
}
