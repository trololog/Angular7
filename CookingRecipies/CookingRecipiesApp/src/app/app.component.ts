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
      apiKey: "AIzaSyAvk2miI6BYXzpSTT2rZ72k3HR5mqIMBNc",
      authDomain: "ngrecipebook-22412.firebaseapp.com"
    });
  }
}
