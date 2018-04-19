import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  // ther was error coz signup component used forms module and we had removed it from
  // app.module. we can export it like this but not advisble, coz for
  // developers while debugging is tough
  // ,
  // exports: [
  //   FormsModule
  // ]
})

export class ShoppingListModule{

}
