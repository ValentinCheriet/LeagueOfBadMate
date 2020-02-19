import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  isOnHero = true;

  constructor(private authService: AuthService,
              private router: Router) {
    this.authService.isOnHero = false;
  }

  ngOnInit() {
  }

  goInApp() {
    this.authService.isOnHero = true;
    this.router.navigate(['auth/signin']);
  }

}
