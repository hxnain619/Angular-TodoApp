import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todoText : String;
  public todoList = [];

  constructor() {
    this.todoText = '';
  }
  private addItem() : void {
    this.todoList.push(this.todoText);
    this.todoText=''

  }
  private DeleteTask(index) :void {
      this.todoList.splice(index,1);
  }

}
