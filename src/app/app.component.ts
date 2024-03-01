import { Component } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, ItemComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'покушать', done: true },
    { description: 'поспать', done: false },
    { description: 'поиграть', done: false },
    { description: 'поработать', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}