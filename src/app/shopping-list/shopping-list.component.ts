import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromShoppingList from './store/shopping-list.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[];
  shoppingListState: Observable<{ingredients: Ingredient[]}>; // will resolve to {ingredients: Ingredient[]} the return
  //private subscription: Subscription;

  constructor(private slService: ShoppingListService,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    // we select here shoppingList coz we declare in the app.module that format StoreModule.forRoot({ shoppingList: shoppingListReducer })
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.slService.ingredientChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   //this.ingredients.push(ingredient);
  //
  // }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

}
