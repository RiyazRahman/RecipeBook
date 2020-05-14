import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcmmRXYJpI6OtRvgI9gvVKl-lRErdK3Zk',
      authDomain: 'ng-recipe-book-c1a72.firebaseapp.com',
    });
  }
}
