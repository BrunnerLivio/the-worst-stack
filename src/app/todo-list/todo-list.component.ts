import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todos: TodoItem[] = [];
  constructor() { }

  ngOnInit() {
    this.create('Angular 5');
  }

  create(name: string): TodoItem {
    const currentIndex: number = this.todos.length;
    const newTodo: TodoItem = {
      checked: false,
      id: currentIndex,
      name
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  remove(id: number) {
    const index = this.todos.map(todo => todo.id).indexOf(id);
    this.todos.splice(index, 1);
  }
}
