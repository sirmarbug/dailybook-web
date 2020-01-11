import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [DashboardComponent, AddNoteComponent, SettingsComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
