import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor( private authService: AuthService ) { }

  onSignUp(form: NgForm) {
    const { value: { email, password } } = form;
    this.authService.signupUser(email, password);
  }
}
