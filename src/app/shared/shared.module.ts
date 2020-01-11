import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const declarations = [
];

const imports = [
  CommonModule,
  FormsModule
];

@NgModule({
  declarations,
  imports,
  exports: [
    declarations,
    imports
  ]
})
export class SharedModule { }
