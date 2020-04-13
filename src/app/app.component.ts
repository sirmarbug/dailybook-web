import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

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
  ) {
    translate.setDefaultLang('pl');
    translate.use('pl');
    this.logger.debug('Your log message goes here');
  }
}
