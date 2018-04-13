import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipies/recipe.service';
import { Recipe } from '../recipies/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService
              ){}

  storeRecipes(){
    return this.http.put('https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                          this.recipeService.getRecipies());
  }

  getRecipes(){
    return this.http.get('https://ng-recipe-book-12729.firebaseio.com/recipes.json')
               .map((response: Response) => {
                   const recipes: Recipe[] = response.json();
                   for(let recipe of recipes) {
                     if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = []
                     }
                   }
                   return recipes;
               })
               .subscribe((recipes: Recipe[]) => {
                  this.recipeService.setRecipes(recipes);
               })
  }

}
