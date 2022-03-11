import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Modify the login component and the login template to collect login details and add the validators as necessary
 */
import { AuthenticationService } from '../services/authentication.service';
export var passwordRex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})/;

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // setup the loginform and validators
    this.loginForm = this.formBuilder.group({
      exampleInputEmail1: ['', [this.usernameValidator]],
      exampleInputPassword1: ['', [this.passwordValidator]],
    });
  }

  ngOnDestroy() {}

  onSubmit(value: any) {
    if (!this.loginForm.valid) {
      return null;
    }
    console.log(value);
    this.authenticationService
      .login(value.exampleInputEmail1, value.exampleInputPassword1)
      .subscribe((data) => {
        this.loginData = data;
        console.log(data);
        this.authenticationService
          .afterLogin(this.loginData.token)
          .subscribe((data) => {
            localStorage.setItem('token', this.loginData.token);
            this.router.navigateByUrl('/userData');
          });
      });
  }

  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.length < 7) {
      return { emailInvalid: true };
    }
    return null;
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    if (passwordRex.test(control.value)) {
      return null;
    }
    return { passwordInvalid: true };
  }
}
