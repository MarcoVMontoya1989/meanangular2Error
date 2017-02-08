import { Component, OnInit } from '@angular/core';
import {TodosService} from '../services/todo.service';
import {Todo} from '../Todo';

@Component({
  moduleId:module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
})
export class TodosComponent implements OnInit  {

  todos: Todo[];

  constructor(private _services: TodosService){

  }

  ngOnInit() {
    this.todos = [];
    this._services.getTodo().subscribe(res => {
      console.log(res);
      this.todos = res;
    });
  };

  addTodo(event:any, todoText:any){
    console.log(todoText.value);
    var resultado;
    var newTodo = {
      text: todoText.value,
      isCompleted: false
    };

    resultado = this._services.saveTodo(newTodo).subscribe(res => {
      this.todos.push(newTodo);
      todoText = '';
    });
  };

  setEditState(todo: any, state:any){
    if(state){
      todo.isEditMode = state;
    }else{
      delete todo.isEditMode;
    }
  };

  updateStatus(todolist:any){
    var _todo: {
      _id: todolist._id,
      text: todolist.text,
      isCompleted: !todolist.isCompleted
    };
    this._services.updateTodo(_todo)
    .subscribe(data => {
      todolist.isCompleted = !todolist.isCompleted;
    });
  };

  // updateTodoText(event:any, todo:any){
  //   if(event.which === 13){
  //     todo.text = event.target.value;
  //     var _todo = {
  //       _id: todo._id,
  //       text: todo.text,
  //       isCompleted: todo.isCompleted
  //     };

  //     this._services.updateTodo(_todo).subscribe(data => {
  //       this.setEditState(todo, false);
  //     });
  //   };
  // };


}
