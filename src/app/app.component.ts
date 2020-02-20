import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {RouterOutlet} from '@angular/router';
import {fader} from './route-animations';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent {

  constructor(private authService: AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyAKw9TBT7ZHFbV_dy7hDCJ8P5OTzVdylZ0",
      authDomain: "leagueofbadmate.firebaseapp.com",
      databaseURL: "https://leagueofbadmate.firebaseio.com",
      projectId: "leagueofbadmate",
      storageBucket: "leagueofbadmate.appspot.com",
      messagingSenderId: "284399196805",
      appId: "1:284399196805:web:54bf6f3c1d4aa010d6a7ec",
      measurementId: "G-W4748P6SLX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
