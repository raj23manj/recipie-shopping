import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router, } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
//import { Ingredient } from '../../shared/ingredient.model';

//import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
//import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //recipe: Recipe;
  recipeState: Observable<fromRecipe.State>;
  id: number;
 // private recipeService: RecipeService, not added notice  Store<fromApp.AppState>, it is added dynamically.
 // see the recipe.reducer, we extend the appstate
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>
              ) {

   }

  ngOnInit() {
    //const id = this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        // this.recipe = this.recipeService.getRecipe(this.id);
        this.recipeState = this.store.select('recipes');
      }
    )
  }

  onAddToShoppingList(){
    this.store.select('recipes')
        .take(1)
        .subscribe((recipeState: fromRecipe.State) => {
          this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
        });
    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    // this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe(){
    // using relative way
    //this.router.navigate(['edit'], {relativeTo: this.route});
    // other way, complex setup
    this.router.navigate(['../', this.id ,'edit'], { relativeTo: this.route });

  }

  onDeleteRecipe(){
    //this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
