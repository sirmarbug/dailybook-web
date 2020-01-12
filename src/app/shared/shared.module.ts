import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as fromComponents from './components';
import * as fromModals from './modals';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

const declarations = [
  ...fromComponents.components,
  ...fromModals.modals
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
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations,
  imports,
  exports: [
    declarations,
    imports
  ],
  entryComponents: [
    declarations
  ]
})
export class SharedModule { }
