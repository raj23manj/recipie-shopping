import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// mostly need to import in every feature mudule
import { CommonModule } from '@angular/common';

// import { DropdownDirective } from './../shared/dropdown.directive';

import { RecipiesComponent } from './recipies.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from './../shared/shared.module';

// for lazy loading redux
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './store/recipe.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/recipe.effects';



/*
  we must not duplicate modules here and app in the declarations array,
  error :  Type DropdownDirective is part of the declarations of 2 modules
*/

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    // for redux lazy loading (featurename, reducers), this will load dynamically inject state and reducers into global state
    StoreModule.forFeature('recipes', recipeReducer),
    EffectsModule.forFeature([RecipeEffects])
  ]
})

export class RecipesModule {}
