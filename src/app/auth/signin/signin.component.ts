import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor( private authService: AuthService ) { }

  onSignIn(form: NgForm) {
    const { value: { email, password } } = form;
    this.authService.signinUser(email, password);
  }
}
