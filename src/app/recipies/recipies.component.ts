import { Component, OnInit } from '@angular/core';
//import { Recipe } from './recipe.model';
//import { RecipeService } from  './recipe.service';

// the recipe service is shared with recipe and child components, hence when click on other component links addIngredients
// and come back data will be lost, so move to app.modules
@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
  //providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {

  //selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) {
  //
  // }

  constructor() {

  }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
