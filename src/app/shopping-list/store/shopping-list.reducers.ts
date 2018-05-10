// * will bundle all export objects from the file mrntioned
import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';

const intialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

// these two params are automatically passed by ngrx state & action
export function shoppingListReducer(state = intialState, action: ShoppingListActions.ShoppingListActions) {
  // while returning it returns a new copied/overrided state of old one, as states are immutable

  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
          return {
            ...state,
            ingredients: [...state.ingredients, action.payload]
          };
    case ShoppingListActions.ADD_INGREDIENTS:
          return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload]
          };
    case ShoppingListActions.UPDATE_INGREDIENT:
          const ingredient = state.ingredients[action.payload.index];
          const updatedIngredient = {
            ...ingredient,
            ...action.payload.ingredient
          };
          const ingredients = [...state.ingredients];
          ingredients[action.payload.index] = updatedIngredient;
          return {
            ...state,
            ingredients: ingredients
          };
    case ShoppingListActions.DELETE_INGREDIENT:
          const oldIngredients = [...state.ingredients];
          oldIngredients.splice(action.payload, 1);
          return {
            ...state,
            ingredients: oldIngredients
          };
    default:
        return state;
  }
}
