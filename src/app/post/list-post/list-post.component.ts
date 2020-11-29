import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit , OnDestroy {
  posts: Post[]= [];
  private postsSub : Subscription;
  isLoding =false;
  totalPosts = 10;
  postsPerPage=2;
  PageSizeOptions = [1,2,5,10];

//= [
 //   {title : ' sadok', content: 'balalou'},
 //   {title : ' raouf', content: 'balalou'},
 //   {title : ' hamma', content: 'balalou'},
 // ];

  constructor(private postService : PostService) { }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  ngOnInit( ): void {
    this.isLoding=true;
     this.postService.getPosts(); 
     this.postsSub = this.postService.getPostUpdateListener().subscribe((posts : Post[]) => {
       this.posts = posts;
       this.isLoding=false;

     })
  }

  onDelete(postId : string){

    this.postService.deletePost(postId);
  }

  onChangedPage(pageData : PageEvent){
    console.log(pageData);
  }

}
