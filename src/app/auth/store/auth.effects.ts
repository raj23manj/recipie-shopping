import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core'

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup ;

  // to inject actions we use Injectable, and the ngrx/effects is automatically able to
  // retrive the actions from application states/store

  // $ => represents it is a observable
  constructor(private actions$: Actions) {

  }
}
