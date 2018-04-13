import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipies/recipe.service';
import { Recipe } from '../recipies/recipe.model';

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
               .subscribe((response: Response) => {
                  const recipes: Recipe[] = response.json();
                  this.recipeService.setRecipes(recipes);
               })
  }

}
