import { Recipe } from './recipe.model'

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
                'working',
                'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 2',
                'This is a test',
                  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipies(){
    // returns a copy of original array
    return this.recipes.slice();
  }

}
