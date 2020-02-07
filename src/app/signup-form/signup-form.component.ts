import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupValidators } from './signup.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        SignupValidators.usernameCannotContainSpace,
        SignupValidators.usernameCannotContainCapitals,
      ], SignupValidators.usernameShouldBeUnique),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        SignupValidators.passwordCannotBeSimple
      ])
    })
  });

  login() {
    if(Math.floor(Math.random() * 10) > 5) {
      this.form.setErrors({
        errorOne: true
      });
    } else {
      this.form.setErrors({
        errorTwo: true
      });
    }
  }

  get username() {
    return this.form.get('account.username');
  }
  
  get password() {
    return this.form.get('account.password');
  }
}
