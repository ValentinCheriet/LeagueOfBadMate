import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()

export class AuthService {
  isOnHero: boolean = true;
  isAuth: boolean = false;
  onLogOutNow: boolean = false;

  constructor() { }

  createNewUser(email: string, password: string, username: string) {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
            firebase.auth().signOut();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
    this.onLogOutNow = true;
  }

}

