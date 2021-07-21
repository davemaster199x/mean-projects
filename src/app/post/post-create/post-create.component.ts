import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  entererdTitle = "";
  entererdContent = "";
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.entererdTitle,
      content: this.entererdContent
    };
    this.postCreated.emit(post);
  }
}
