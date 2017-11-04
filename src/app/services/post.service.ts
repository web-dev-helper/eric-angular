import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,  AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Post';

@Injectable()
export class PostService {
  postsRef: AngularFireList<any>;
  posts: Observable<any[]>;
  post: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.postsRef = this.db.list('posts');
    this.posts = this.postsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getPosts(){
    return this.posts;
  }

  newPost(post: Post){
    this.postsRef.push(post);
  }

  getPost(id: string){
    this.post = this.db.object('/posts/'+id).valueChanges();
    return this.post;
  }

  updatePost(id: string, post: Post){
    return this.postsRef.update(id, post);
  }

  deletePost(id: string){
    return this.postsRef.remove(id);
  }
}
