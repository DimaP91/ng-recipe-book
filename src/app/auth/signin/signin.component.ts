import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent {
	form: FormGroup;

	constructor(private authService: AuthService, private fb: FormBuilder) {}

	onSignIn(form: FormGroup) {
		const {
			value: { email, password }
		} = form;
		this.authService.signinUser(email, password);
	}
}
