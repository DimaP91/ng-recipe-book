import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyByYH8frbng4HhsuKq35Mm2OYcFnzrn4ak',
      authDomain: 'ng-recipe-book-e1671.firebaseapp.com',
    });
  }
}
