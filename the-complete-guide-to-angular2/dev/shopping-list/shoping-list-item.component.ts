import {Component, EventEmitter} from 'angular2/core';
import { ListItem } from './list-item';
import { ShoppingListService } from "./services/shopping-list.service";

@Component({
    selector: 'shopping-list-item',
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name" />
        </div>
        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount" />
        </div>
        <button class="red" (click)="onDelete()">Delete Item</button>
    `,
    inputs: ['item:selectedItem'],
    outputs: ['itemDeleted']
})

export class ShoppingListItemComponent {
    item = {
        name: '',
        amount: 0
    };
    itemDeleted = new EventEmitter<ListItem>();

    constructor(private _shoppingListService: ShoppingListService) {}

    onDelete() {
        // this.itemDeleted.emit(this.item);
        this._shoppingListService.deleteItem(this.item);
        this.itemDeleted.emit(null);
    }
}