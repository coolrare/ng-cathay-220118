import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit, OnDestroy {
  data: Login = {
    accounts: [
      {
        email: 'user1@example.com',
        password: '111AAss',
      },
      {
        email: 'user2@example.com',
        password: '222BBbb',
      },
      {
        email: 'user3@example.com',
        password: '333DDee',
      },
    ],
    isRemember: true,
  };

  form!: FormGroup;

  orig_body_class = '';

  constructor(private fb: FormBuilder) {}

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

    // this.form = this.fb.group({
    //   email: this.fb.control('user@example.com', [
    //     Validators.required,
    //     Validators.email,
    //     Validators.minLength(5),
    //     Validators.pattern(/^[a-zA-Z0-9@_\-\.]+$/),
    //   ]),

    //   password: this.fb.control('123123', [
    //     Validators.required,
    //     Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/)
    //   ]),

    //   isRemember: true,
    // });

    this.form = this.fb.group({
      accounts: this.fb.array([]),
      isRemember: true,
    });

    for (let index = 0; index < this.data.accounts.length; index++) {
      this.formArray('accounts').push(this.createAccountGroup());
    }

    this.form.setValue(this.data);
  }

  resetForm() {
    this.formArray('accounts').clear();

    for (let index = 0; index < this.data.accounts.length; index++) {
      this.formArray('accounts').push(this.createAccountGroup());
    }

    this.form.reset(this.data);
  }

  createAccountGroup() {
    return this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9@_\-\.]+$/),
      ]),

      password: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/),
      ]),

    });
  }

  formArray(name: string) {
    return this.form.get(name) as FormArray;
  }

  addNewAccount() {
    this.formArray('accounts').push(this.createAccountGroup());
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_class;
  }

  doSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted');
    }
  }

  isValidateForm(controlName: string, group: AbstractControl | FormGroup) {
    return group.get(controlName)?.touched;
  }
}


// Generated by https://quicktype.io

export interface Login {
  accounts: Account[];
  isRemember: boolean;
}

export interface Account {
  email:      string;
  password:   string;
}
