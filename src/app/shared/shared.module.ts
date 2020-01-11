import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromComponents from './components';

const declarations = [
  ...fromComponents.components
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
