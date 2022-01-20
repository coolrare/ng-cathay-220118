import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: Login = {
    email: '',
    password: '',
    isRemember: true
  };

  orig_body_class = '';

  constructor() { }

  ngOnInit(): void {
    this.orig_body_class = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_class;
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted');
    }
  }

  isValidateForm(c: NgModel, f: NgForm) {
    return (c.touched || f.submitted);
  }

}

// Generated by https://quicktype.io

export interface Login {
  email:      string;
  password:   string;
  isRemember: boolean;
}
