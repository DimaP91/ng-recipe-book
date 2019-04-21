import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	ngOnInit() {
		firebase.initializeApp({
			apiKey: 'AIzaSyByYH8frbng4HhsuKq35Mm2OYcFnzrn4ak',
			authDomain: 'ng-recipe-book-e1671.firebaseapp.com'
		});
	}
}
