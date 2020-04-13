import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { auth } from 'firebase';
import { SessionService } from '@core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail: string;
  password: string;

  constructor(
    private logger: NGXLogger,
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  onSignInClick(): void {
    this.logger.debug(this.mail);
    // this.sessionService.loginWithEmail(this.mail, this.password)
    //   .subscribe((res: auth.UserCredential) => {
    //     this.logger.debug(res);
    //     this.router.navigateByUrl('/dashboard/home');
    //   });
  }

}
