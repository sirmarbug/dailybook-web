import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';
import { SessionService } from '@core/services';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { auth } from 'firebase';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private logger: NGXLogger,
    private router: Router,
    private sessionService: SessionService,
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repeatPassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.logger.debug('invalid');
      return;
    }
    this.logger.debug('valid');
    // tslint:disable-next-line:no-string-literal
    this.sessionService.registerWithEmail(
      this.registerForm.controls['mail'].value,
      this.registerForm.controls['password'].value,
      this.registerForm.controls['firstName'].value,
      this.registerForm.controls['lastName'].value
      ).subscribe((userCredential: auth.UserCredential) => {
        console.log('registerWithEmail', userCredential);
      },
      err => this.logger.debug('error:', err));
  }

}
