import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { RecipeService } from '../recipies/recipe.service';
import { Recipe } from '../recipies/recipe.model';
import 'rxjs/Rx';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService
              ){}

  storeRecipes(){
    const token = this.authService.getToken();
    return this.httpClient.put('https://ng-recipe-book-12729.firebaseio.com/recipes.json?auth=' + token,
                          this.recipeService.getRecipies());
  }

  getRecipes(){
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-12729.firebaseio.com/recipes.json?auth=' + token)
               .map((recipes) => {
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
                   return recipes;
               })
               .subscribe((recipes: Recipe[]) => {
                  this.recipeService.setRecipes(recipes);
               })
  }

}
