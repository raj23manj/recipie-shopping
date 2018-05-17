import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
//import { RecipeService } from  '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  // recipes: Recipe[];
  recipesState: Observable<fromRecipe.State>;

  //private recipeService: RecipeService,
  constructor(private store: Store<fromRecipe.FeatureState>,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    // this.subscription = this.recipeService.recipesChanged.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes = recipes;
    //   }
    // );
    // this.recipes = this.recipeService.getRecipies();
    // the name 'recipes' here because, in recipe.module we set it up like that
    this.recipesState = this.store.select('recipes');
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

}
