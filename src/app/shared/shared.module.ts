import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DropdownDirective } from './../shared/dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    DropdownDirective,
    CommonModule
  ]
})

export class SharedModule{}

// not necessary to do this
// @NgModule({
//   declarations: [
//     DropdownDirective,
//     CommonModule
//   ],
//   imports: [DropdownDirective,
//   CommonModule],
//   exports: [
//     DropdownDirective,
//     CommonModule
//   ]
// })
