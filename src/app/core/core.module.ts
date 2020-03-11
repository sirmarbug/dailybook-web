import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from '@env';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const declarations = [
];
const imports = [
  CommonModule,
  HttpClientModule,
  LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF}),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule
];

@NgModule({
  declarations,
  imports
})
export class CoreModule { }
