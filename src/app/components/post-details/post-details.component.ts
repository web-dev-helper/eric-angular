import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Post } from '../../models/Post'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id: string;
  post: Post;
  

  constructor(
    private postService: PostService, 
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(post => {
      this.post = post;
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
