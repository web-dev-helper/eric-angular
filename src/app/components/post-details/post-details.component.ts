import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Post } from '../../models/Post'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id: string;
  post: Post;
  enableEdit: boolean;
  

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
        if(auth.email == post.author){
          this.enableEdit = true;
        } else {
          this.enableEdit = false;
        }
      })
    })
  }

  onDeleteClick(){
    if(confirm("Are you sure to delete?")){
      this.postService.deletePost(this.id);
      this.flashMessagesService.show('Client removed', {
        cssClass:'alert-succes', timeout: 4000
      })
      this.router.navigate(['board-list']);
    }
  }
}
