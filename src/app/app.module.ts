import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2'; 
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyApsZgZGTUg9xdg11kUzgrdQkG3Jow0Bww",
  authDomain: "eric-angular-app.firebaseapp.com",
  databaseURL: "https://eric-angular-app.firebaseio.com",
  projectId: "eric-angular-app",
  storageBucket: "eric-angular-app.appspot.com",
  messagingSenderId: "119439066011"
}

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'board-list', component:BoardListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
