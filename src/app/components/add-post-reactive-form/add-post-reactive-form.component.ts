import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../../models/Post'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-post-reactive-form',
  templateUrl: './add-post-reactive-form.component.html',
  styleUrls: ['./add-post-reactive-form.component.css']
})
export class AddPostReactiveFormComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private postService: PostService,
    private authService: AuthService,
    private fb: FormBuilder) { 
      this.addForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        author: ['', [Validators.required, Validators.minLength(2)]],
        content: ['', Validators.required]
      })
    }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.addForm = this.fb.group({
          title: ['', [Validators.required, Validators.minLength(2)]],
          author: [auth.email, [Validators.required, Validators.minLength(2)]],
          content: ['', Validators.required]
        })
      } 
    })
  }

  onSubmit({value, valid}: {value: Post, valid: boolean}){
    if(valid){
      // Add New Post
      this.postService.newPost(value);
      this.flashMessagesService.show('New post added', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['board-list']);
    } else {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass:'alert-danger', timeout: 4000
      });
      this.router.navigate(['add-post']);
    }
  }
}
