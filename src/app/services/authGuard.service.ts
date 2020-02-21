import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              if (this.authService.onLogOutNow) {
                this.authService.onLogOutNow = false;
                this.router.navigate(['/auth/signin']);
              } else {
                this.router.navigate(['deniedAccess']);
              }
              resolve(false);
            }
          }
        );
      }
    );
  }
}
