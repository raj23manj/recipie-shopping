import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
//import { Response } from '@angular/http';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';


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
        // .subscribe((response: HttpEvent<Object>) => {
        //   console.log(response);
        //   console.log(response.type === HttpEventType.Response);
        // });
        .subscribe((response) => {
          console.log(response);
          // console.log(response.type === HttpEventType.Response);
        });
  }

  onFetch(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
