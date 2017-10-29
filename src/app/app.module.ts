import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2'; 

import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';

//Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyApsZgZGTUg9xdg11kUzgrdQkG3Jow0Bww",
  authDomain: "eric-angular-app.firebaseapp.com",
  databaseURL: "https://eric-angular-app.firebaseio.com",
  projectId: "eric-angular-app",
  storageBucket: "eric-angular-app.appspot.com",
  messagingSenderId: "119439066011"
}

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
