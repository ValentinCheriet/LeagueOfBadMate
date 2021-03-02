import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const username = this.signUpForm.get('username').value;

    this.authService.createNewUser(email, password, username).then(
      () => {
        this.successMsg = 'Votre Compte à bien été créer !';
        this.errorMsg = '';
      },
      (error) => {
        if (error.code === "auth/invalid-email") {
          this.errorMsg = 'L\'adresse e-mail n\'est pas valide';
        } else {
          this.errorMsg = "Un compte existe déjà avec cette adresse";
        }
      }
    );
    this.authService.addNewUserAvailable(username);
  }
}
