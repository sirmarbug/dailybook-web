import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'account',
      component: AccountComponent
    },
    {
      path: 'security',
      component: SecurityComponent
    },
    {
      path: '',
      redirectTo: 'account',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
