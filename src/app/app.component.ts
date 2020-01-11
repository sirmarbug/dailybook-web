import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailybook-web';

  constructor(
    public translate: TranslateService,
    private logger: NGXLogger,
    private authService: AuthService
  ) {
    translate.setDefaultLang('pl');
    translate.use('pl');
    this.logger.debug('Your log message goes here');
    this.logger.debug('authService', this.authService.user);
  }
}
