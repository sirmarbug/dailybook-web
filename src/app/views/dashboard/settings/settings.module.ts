import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent,
    SecurityComponent
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
