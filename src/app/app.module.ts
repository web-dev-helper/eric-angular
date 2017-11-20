import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from '../environments/environment';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddPostReactiveFormComponent } from './components/add-post-reactive-form/add-post-reactive-form.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditPostComponent } from './components/edit-post/edit-post.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'register', component:RegisterComponent},
  {path:'board-list', component:BoardListComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'add-post', component:AddPostComponent, canActivate:[AuthGuard]},
  {path:'add-post-reactive-form', component:AddPostReactiveFormComponent, canActivate:[AuthGuard]},
  {path:'post/:id', component: PostDetailsComponent, canActivate:[AuthGuard]},
  {path:'edit-post/:id', component: EditPostComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AddPostComponent,
    AddPostReactiveFormComponent,
    PostDetailsComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    PostService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
