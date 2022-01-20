
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  orig_body_class = '';

  constructor() { }

  ngOnInit(): void {
    this.orig_body_class = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_class;
  }

}
