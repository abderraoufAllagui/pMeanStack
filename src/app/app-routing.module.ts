import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './post/list-post/list-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';

const routes: Routes = [
  {path : '', component: ListPostComponent},
  {path : 'create', component: CreatePostComponent},
  {path : 'edit/:postId', component: CreatePostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
