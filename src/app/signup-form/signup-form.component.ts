import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { SignupValidators } from './signup.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    // nested groups
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
    }),
    topics: new FormGroup({
      languages: new FormArray([

      ])
    })
  });
  constructor(gb: FormBuilder) {

  }

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

  addLanguage(language: HTMLInputElement) {
    this.languages.push(new FormControl(language.value))
    language.value = ''
  }

  removeLanguage(language: HTMLInputElement) {
    this.languages.controls = this.languages.controls.filter((l) => l.value !== language.value)
  }

  get languages() {
    return this.form.get('topics.languages') as FormArray;
  }

  get username() {
    return this.form.get('account.username');
  }
  
  get password() {
    return this.form.get('account.password');
  }
}
