// Application related Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { DropdownDirective } from './shared/dropdown.directive';

// Services
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from  './recipies/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

//custom modules
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
//import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

// here in app module we need to use BrowserModule it intun contains common module and others

// here what ever is added is eager loaded meaning when app is intialise all this is all called.
// recipes mould will be lazy loaded
@NgModule({
  declarations: [
    AppComponent
    // HeaderComponent,
    // HomeComponent,
    //DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
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
