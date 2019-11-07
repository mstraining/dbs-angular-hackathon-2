import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validate, validateConfirmUsername } from '../validator/username.validator';
import { validatePassword, validateConfirmPassword } from '../validator/password.validator';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private registerService: RegisterService) { }

  register() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {

    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12), validate]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), validatePassword(/^[a-z|A-Z|0-9]*$/)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), validatePassword(/^[a-z|A-Z|0-9]*$/)])
    }, [validateConfirmPassword]);
  }

}
