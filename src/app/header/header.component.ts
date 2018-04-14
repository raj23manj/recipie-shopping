import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService){ }

  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  onSave(){
    this.dataStorageService.storeRecipes()
        .subscribe((response: Response) => {
          console.log(response);
        });
  }

  onFetch(){
    this.dataStorageService.getRecipes();
  }


}
