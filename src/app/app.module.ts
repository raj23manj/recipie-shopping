// Application related Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { DropdownDirective } from './shared/dropdown.directive';

// Services
// moved to core modules

//custom modules
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
//import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

// ngrx reducers
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';
import { reducers } from './store/app.reducers';

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
    // HttpModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    // StoreModule.forRoot({ shoppingList: shoppingListReducer })
    StoreModule.forRoot(reducers)  // which means for our main application for eagerly loaded ones like shopping list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// setting master this commit without using modules
/*
test@test.com
 user test123
*/
