import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http'
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
    //const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-book-12729.firebaseio.com/recipes.json?auth=' + token,
    //                       this.recipeService.getRecipies(), {observe: 'events'});
    // return this.httpClient.put('https://ng-recipe-book-12729.firebaseio.com/recipes.json',
    //                       this.recipeService.getRecipies(), { observe: 'body', params: new HttpParams().set('auth', token) });

    // helpful for seeing progress, uploading and downloading a file, creating request from scratch
    const req = new HttpRequest('PUT',
                                'https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                this.recipeService.getRecipies(),
                                {
                                  reportProgress: true
                                  // params: new HttpParams().set('auth', token)
                                }
                              );
    return this.httpClient.request(req);
  }

  getRecipes(){
    //const token = this.authService.getToken();
    //const headers =   new HttpHeaders().set('Authoriztion', 'Bearer amnkjkhois');   //.apprend()

    this.httpClient.get<Recipe[]>('https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                  {
                                    observe: 'body',
                                    responseType: 'json'
                                    //params: new HttpParams().set('auth', token)
                                    //headers: headers

                                  })
    /*
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-12729.firebaseio.com/recipes.json?auth=' + token,
      {observe: 'response', responseType: 'text'})

      observe response will be complete body will be only body, bolb,etc see documentation for more
      section 23 lecture 296
      here we need not do response.json(); it is taken care by defult, in case we want other format like text, string
    */
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
                   return recipes;
               })
               .subscribe((recipes: Recipe[]) => {
                  this.recipeService.setRecipes(recipes);
               })
  }

}
