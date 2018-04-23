import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// authguard is a service, actulally needed to be in recipes module but since used in routing needs to be here
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipiesComponent } from './recipies.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const recipesRoutes: Routes = [
  // for lazy loading we sould declare it the app routes, so reomed recipes
  { path: '', component: RecipiesComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ] }
]

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class RecipesRoutingModule{}
