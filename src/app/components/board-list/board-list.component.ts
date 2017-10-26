import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  posts: any[] = [
    {title: "Title a", contents: "Content a"},
    {title: "Title b", contents: "Content b"}];

  constructor() { }

  ngOnInit() {
  }

}
