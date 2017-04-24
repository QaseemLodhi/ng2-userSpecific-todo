import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService, AlertService } from '../services/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;
  todoList: any;
  currentUser: any;
  loading = false;
  constructor(
    private hs: HttpService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadTodos();
  }

  private loadTodos() {
    this.hs.GetRequest('/api/todo/' + this.currentUser.id).subscribe(res => {
      if (!res.success) {
      } else {
        this.todoList = res.data;
      }
    })
  }
  addTodo(valid: any, value: any) {
    this.loading = true;
    event.preventDefault();
    if (!valid || (value.todoTask === undefined)) return;
    let obj = {
      todoTask: value.todoTask,
      user_id: this.currentUser.id,
      completed: false
    }
    value.todoTask = '';
    this.hs.PostRequest('/api/todo', { todo: obj }).subscribe(res => {
      if (!res.success) {
        this.loading = false;
        this.alertService.error(res.error);
      } else {
        this.loading = false;
        this.alertService.success('Todo add Successful!');
        this.loadTodos();
      }
    });
  }
  deleteTodo(id: any) {
    this.hs.DeleteRequest('/api/todo/' + id).subscribe(res => {
      if (!res.success) {
        this.alertService.error(res.error);
      } else {
        this.alertService.success('Todo delete Successful!');
        this.loadTodos();
      }
    })
  }
  updateTodo(event, value) {
    let obj = {
      completed: event.target.checked,
      todoId: value._id
    }
    this.hs.PutRequest('/api/todo', { todo: obj }).subscribe(res => {
      if (!res.success) {
        this.alertService.error(res.error);
      } else {
        this.loadTodos();
      }
    })

  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
