import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginData = {
    "username" : '',
    "password" : '',
  }
  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(){}

}
