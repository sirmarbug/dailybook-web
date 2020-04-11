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
    private fb: FormBuilder
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
    // this.authService.registerWithEmail(this.registerForm.controls['mail'].value, this.registerForm.controls['password'].value)
    //   .subscribe((res: auth.UserCredential) => {
    //     this.logger.debug(res);
    //   },
    //   err => this.logger.debug('error:', err));
  }

}
