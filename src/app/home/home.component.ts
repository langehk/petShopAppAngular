import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../_models/todoitem';
import { TodoItemService } from '../_services/todoitem.service';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  //moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  todoitems: TodoItem[] = [];
  username: string;
  errormessage: string = '';

  constructor(private todoItemService: TodoItemService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {
    // get users from secure api end point
    this.todoItemService.getItems()
      .subscribe(
        items => {
          this.todoitems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}
