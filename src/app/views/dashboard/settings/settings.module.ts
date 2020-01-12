import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    SecurityComponent
  ],
  imports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
