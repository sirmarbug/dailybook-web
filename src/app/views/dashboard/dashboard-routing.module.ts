import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'add-note',
      component: AddNoteComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
