// * will bundle all export objects from the file mrntioned
import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';

// export interface AppState {
//   shoppingList: State
// }

export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

const intialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1 // just a convention no real significance
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
          // const ingredient = state.ingredients[action.payload.index];
          const ingredient = state.ingredients[state.editedIngredientIndex];

          const updatedIngredient = {
            ...ingredient,
            ...action.payload.ingredient
          };
          const ingredients = [...state.ingredients];
          ingredients[state.editedIngredientIndex] = updatedIngredient;
          return {
            ...state,
            ingredients: ingredients,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
    case ShoppingListActions.DELETE_INGREDIENT:
          const oldIngredients = [...state.ingredients];
          // oldIngredients.splice(action.payload, 1);
          oldIngredients.splice(state.editedIngredientIndex, 1);
          return {
            ...state,
            ingredients: oldIngredients,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
    case ShoppingListActions.START_EDIT:
          //state.ingredients[action.payload]; to make it immutable way below method
          const editedIngredient = {...state.ingredients[action.payload]};
          return {
            ...state,
            editedIngredient: editedIngredient,
            editedIngredientIndex: action.payload
          }
    case ShoppingListActions.STOP_EDIT:
    return {
      ...state,
      editedIngredient: null,
      editedIngredientIndex: -1
    }
    default:
      return state;
  }
}
