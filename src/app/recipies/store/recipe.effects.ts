// effects are used to make asyncronous calls

import { Effect, Actions } from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import 'rxjs/add/operator/switchMap';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';

// to fetch data from the store
import  'rxjs/add/operator/withLatestFrom';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
                .ofType(RecipeActions.FETCH_RECIPES)
                .switchMap((action: RecipeActions.FetchRecipes) => {
                  return this.httpClient.get<Recipe[]>('https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                                {
                                                  observe: 'body',
                                                  responseType: 'json'
                                                  //params: new HttpParams().set('auth', token)
                                                  //headers: headers

                                                })
                })
                .map((recipes) => {
                  console.log(recipes);
                  //Rresponse: Response
                  // this can be use but new feature is used
                  //recipes: Recipe[]
                   // const recipes: Recipe[] = response.json();
                    for(let recipe of recipes) {
                      if(!recipe['ingredients']){
                         console.log(recipe);
                         recipe['ingredients'] = []
                      }
                    }
                    return {
                      type: RecipeActions.SET_RECIPES,
                      payload: recipes
                    };
                });

    @Effect({dispatch: false})
    recipeStore = this.actions$
                  .ofType(RecipeActions.STORE_RECIPES)
                  .withLatestFrom(this.store.select('recipes')) // allows me to combine with ofType value 'RecipeActions.STORE_RECIPES' + another value observable spits out
                  .switchMap(([action, state]) => {
                    const req = new HttpRequest('PUT',
                                                'https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                                state.recipes,
                                                {
                                                  reportProgress: true
                                                }
                                              );
                    return this.httpClient.request(req);
                  });

  constructor(private actions$: Actions,
              private store: Store<fromRecipe.FeatureState>,
              private httpClient: HttpClient) {}
}
