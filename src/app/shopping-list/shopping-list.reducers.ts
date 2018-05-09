import { Action } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';

const intialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

// these two params are automatically passed by ngrx state & action
export function shoppingListReducer(state = intialState, action: Action) {
  // while returning it returns a new copied/overrided state of old one, as states are immutable
  return state;
}
