import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  // lazy loading recipes module, webpack handles it oly when we enter this route
  // once added lazy loading restart the server
  {path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}


/*
What if you want to use route protection (canActivate  to be precise) on lazily loaded routes?

You can add canActivate to the lazy loaded routes but that of course means, that you might load code which in the end can't get accessed anyways. It would be better to check that BEFORE loading the code.

You can enforce this behavior by adding the canLoad  guard to the route which points to the lazily loaded module:

{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }

In this example, the AuthGuard  should implement the CanLoad interface.

https://angular.io/api/router/CanLoad
*/


/* 21, 277
  Don't provide services in shared modules!
  especially not, if you plan to use them in lazy loaded modules
*/
