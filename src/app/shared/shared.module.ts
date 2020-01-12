import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromComponents from './components';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

const declarations = [
  ...fromComponents.components
];

const imports = [
  CommonModule,
  FormsModule,
  MatCardModule,
  MatButtonModule,
  TranslateModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatChipsModule,
  MatIconModule
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
