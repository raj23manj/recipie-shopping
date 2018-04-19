import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from  './recipies/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

//custom modules
import { RecipesModule } from './recipies/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

// here in app module we need to use BrowserModule it intun contains common module and others

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [
              ShoppingListService,
              RecipeService,
              DataStorageService,
              AuthService,
              AuthGuard
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// setting master this commit without using modules
/*
 user test123
*/
