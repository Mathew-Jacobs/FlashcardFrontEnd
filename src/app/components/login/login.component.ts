import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(private _form: FormBuilder, private authService: AuthService) {
    this.createForm();
    this.createFormReg();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    })
  }

  createFormReg(){
    this.registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
  }

  onSubmitReg() {
    console.log(this.registerForm.value);
    this.authService
      .register(this.registerForm.value)
      .subscribe(( () => this. authService.login(this.registerForm.value)) );
  }

}
