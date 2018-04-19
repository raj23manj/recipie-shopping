// Application related Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { DropdownDirective } from './shared/dropdown.directive';

// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from  './recipies/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

//custom modules
import { RecipesModule } from './recipies/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

// here in app module we need to use BrowserModule it intun contains common module and others

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
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
