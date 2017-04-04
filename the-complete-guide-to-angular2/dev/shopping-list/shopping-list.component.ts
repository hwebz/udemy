import { Component } from 'angular2/core';
import { ShoppingListNewItemComponent } from "./shopping-list-new-item.component";
import { ListItem } from "./list-item";
import { ShoppingListItemComponent } from "./shoping-list-item.component";

@Component({
    selector: 'my-shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngIf="listItems.length == 0" class="message">No item found</li>
                    <li *ngFor="#item of listItems"  (click)="onSelect(item)">{{ item.name }} ({{ item.amount }})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item [selectedItem]="selectedItem" (itemDeleted)="onItemDeleted($event)"></shopping-list-item>
        </section>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent {
    listItems = new Array<ListItem>();
    selectedItem: ListItem;

    onItemAdded(item: ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelect(item: ListItem) {
        // this.selectedItem = {name: item.name, amount: item.amount}; // For disable two-way binding - have to save manually
        this.selectedItem = item; // reference to one object - two-way binding
    }

    onItemDeleted(item: ListItem) {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}