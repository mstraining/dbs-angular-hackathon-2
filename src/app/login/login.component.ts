import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validate } from '../validator/username.validator';
import { validatePassword } from '../validator/password.validator';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), validate]),
    password: new FormControl('', [Validators.minLength(6), Validators.required, validatePassword(/^[a-z|A-Z|0-9]*$/), Validators.maxLength(12)])
  });

  login() {
    console.log(this.loginForm.value);
  }

  constructor(loginService: LoginServiceService) { }

  ngOnInit() {
  }

}
