import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  entererdTitle = "";
  entererdContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      const post: Post = {
        title: form.value.title,
        content: form.value.content
      };
      this.postCreated.emit(post);
    }
  }
  getTitleMessage(){
    return 'Please Enter Title.';
  }
  getContentMessage(){
    return 'Please Enter Content.';
  }
}

// export class PostCreateComponent {
//   entererdTitle = "";
//   entererdContent = "";
//   @Output() postCreated = new EventEmitter<Post>();

//   onAddPost() {
//     const post: Post = {
//       title: this.entererdTitle,
//       content: this.entererdContent
//     };
//     this.postCreated.emit(post);
//   }
// }
