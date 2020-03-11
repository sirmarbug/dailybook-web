import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';
import { AuthService } from '@core/services';
import { auth } from 'firebase';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

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
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
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
    this.authService.registerWithEmail('', '')
      .subscribe((res: auth.UserCredential) => {
        this.logger.debug(res);
      },
      err => this.logger.debug('error:', err));
  }

}
