import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Post } from '../../models/Post';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: string;
  post: Post = {
    title:'',  
    author:'',
    content:''
  }
  constructor(
    private postService: PostService, 
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(post => {
      this.post = post;
      this.authService.getAuth().subscribe(auth => {
        if(auth.email != post.author){
          this.router.navigate(['post/' + this.id]);
        } 
      })
    })
  }

  onSubmit({value, valid}: {value: Post, valid: boolean}){
    if(valid){
      // Add New Post
      this.postService.updatePost(this.id, value);
      this.flashMessagesService.show('Post updated', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/post/' + this.id]);
    } else {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass:'alert-danger', timeout: 4000
      });
      this.router.navigate(['edit-post/' + this.id]);
    }
  }

}
