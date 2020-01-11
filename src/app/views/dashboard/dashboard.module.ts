import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [DashboardComponent, AddNoteComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
