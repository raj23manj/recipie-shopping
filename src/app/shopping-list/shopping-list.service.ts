import { Ingredient } from '../shared/ingredient.model';
//import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  // ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];
  startedEditing = new Subject<number>();

  // getIngredients(){
  //   // return this.ingredients; => this will work
  //   return this.ingredients.slice();
  // }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   // this.ingredientChanged.emit(this.ingredients.slice());
  //   this.ingredientChanged.next(this.ingredients.slice());
  // }

  addIngredients(ingredients: Ingredient[]) {
    // loop and add, a better way to directly add
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient)
    // }

    // spread operator converts an array of element to a list og elements ([1,2,3]) => (1,2,3)
    this.ingredients.push(...ingredients);
    // this.ingredientChanged.emit(this.ingredients.slice());
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngridients(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
