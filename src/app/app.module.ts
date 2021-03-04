import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FirstTimeComponent } from './first-time/first-time.component';
import { FindPlayersComponent } from './find-players/find-players.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from './services/authGuard.service';
import { DeniedAccessComponent } from './denied-access/denied-access.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PlayerListComponent } from './player-list/player-list.component';

const appRoutes: Routes = [
  {path: 'home', component: ViewComponent},
  {path: 'auth/signin', component: SignInComponent, data: { animation: 'isRight' }},
  {path: 'auth/signup', component: SignUpComponent, data: { animation: 'isLeft' }},
  {path: 'deniedAccess', component: DeniedAccessComponent},
  {path: 'fourOhFour', component: FourOhFourComponent},
  {path: 'myProfile', canActivate: [AuthGuardService], component: MyProfileComponent},
  {path: 'firstStep', canActivate: [AuthGuardService], component: FirstTimeComponent},
  {path: 'playerList', canActivate: [AuthGuardService], component: PlayerListComponent, data: { animation: 'isLeft' }},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'fourOhFour'}
];



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    MyProfileComponent,
    FirstTimeComponent,
    FindPlayersComponent,
    DeniedAccessComponent,
    FourOhFourComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
