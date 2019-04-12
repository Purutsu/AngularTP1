import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() titrePost: string;
  @Input() contentPost: string;
  @Input() likePost: number;
  @Input() datePost: Date;

  constructor() { }

  ngOnInit() {
  }

  Like()
  {
    this.likePost++;
  }
  Hate()
  {
    this.likePost--;
  }
}
