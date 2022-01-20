
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  data: Login = {
    email: 'user@example.com',
    password: '123123',
    isRemember: true,
  };

  form!: FormGroup;

  orig_body_class = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orig_body_class = document.body.className;
    document.body.className = 'bg-gradient-primary';

    // this.form = this.fb.group({
    //   email: ['user@example.com',
    //     [
    //       Validators.required,
    //       Validators.email,
    //       Validators.minLength(5),
    //     ]
    //   ],
    //   password: '123123',
    //   isRemember: true,
    // });

    this.form = this.fb.group({
      email: this.fb.control('user@example.com', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),

      password: this.fb.control('123123', [
        Validators.required
      ]),

      isRemember: true,
    });

  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_class;
  }

  doSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted');
    }
  }

  isValidateForm(controlName: string) {
    return (this.form.get(controlName)?.touched);
  }

}

// Generated by https://quicktype.io

export interface Login {
  email:      string;
  password:   string;
  isRemember: boolean;
}
