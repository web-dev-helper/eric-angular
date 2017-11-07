import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  post: Post = {
    title:'',
    author:'',
    content:''
  }

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private postService: PostService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.post.author = auth.email;
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
