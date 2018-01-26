import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItem;
  @Output() remove = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit() {
  }


}
