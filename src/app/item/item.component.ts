import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: any) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
