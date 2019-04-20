import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  form: FormGroup;

  constructor( private authService: AuthService, private fb: FormBuilder ) { }

  onSignIn(form: NgForm) {
    const { value: { email, password } } = form;
    this.authService.signinUser(email, password);
  }
}
