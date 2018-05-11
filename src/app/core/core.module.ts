import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

// Services
//import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeService } from  './../recipies/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from './../auth/auth.service';
// import { AuthGuard } from './../auth/auth-guard.service';
// since auth guard for now is used only in recipes componet let' smove it there.
// if not we can have it here itself

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers:[
    //ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, // multi says that we can have more interceptors
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})

export class CoreModule {

}
