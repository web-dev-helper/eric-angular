import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
