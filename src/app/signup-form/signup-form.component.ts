import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Adding Validation
  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  // Specific Validation Errors
  // form = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     UsernameValidators.cannotContainSpace
  //   ]),
  //   password: new FormControl('', Validators.required),
  // });

  // Asynchronous Validators
  // form = new FormGroup({
  //   username: new FormControl('', 
  //     Validators.required, 
  //     UsernameValidators.shouldBeUnique),
  //   password: new FormControl('', Validators.required),
  // });

  // Netsted FormGroups
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }),
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }
}
