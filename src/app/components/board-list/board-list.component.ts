import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  posts: any[] = [
    {title: "a", contents: "content a"}];

  constructor() { }

  ngOnInit() {
  }

}
