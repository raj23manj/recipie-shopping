import { Component, OnInit } from '@angular/core';
//import { DataStorageService } from '../../shared/data-storage.service';
//import { Response } from '@angular/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
//import { AuthService } from '../../auth/auth.service';

import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipies/store/recipe.actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;
//,private authService: AuthService, private dataStorageService: DataStorageService,
  constructor(private store: Store<fromApp.AppState>){ }

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  ngOnInit() {
    this.authState = this.store.select('auth')
  }

  onSave(){
    // this.dataStorageService.storeRecipes()
    //     // .subscribe((response: HttpEvent<Object>) => {
    //     //   console.log(response);
    //     //   console.log(response.type === HttpEventType.Response);
    //     // });
    //     .subscribe((response) => {
    //       console.log(response);
    //       // console.log(response.type === HttpEventType.Response);
    //     });
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetch(){
    //this.dataStorageService.getRecipes();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(){
    //this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  //}

}
