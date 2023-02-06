import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginInputDto } from '../shared/Models/Account/loginInputDto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.maxLength(100)] }),
      password: new FormControl('', { validators: [Validators.required, Validators.maxLength(100)] }),
    })
  }

  ngOnInit() {
  }

  Login() {
    let login: LoginInputDto = { email: this.loginForm.value['email'], password: this.loginForm.value['password'] };
    this.loginService.login(login);
    console.log(login);
  }
}
