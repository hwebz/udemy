import { Component, OnInit } from 'angular2/core';
import { ShoppingListNewItemComponent } from "./shopping-list-new-item.component";
import { ListItem } from "./list-item";
import { ShoppingListItemComponent } from "./shoping-list-item.component";
import { ShoppingListService } from "./services/shopping-list.service";
import { FilterPipe } from "../pipes/filter.pipe";

@Component({
    selector: 'my-shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            Filter:
            <input type="text" #filter (keyup)="0">
            <div class="list">
                <ul>
                    <li *ngIf="listItems.length == 0" class="message">No item found</li>
                    <li *ngFor="#item of listItems | myFilter:filter.value:'ignore'"  (click)="onSelect(item)">{{ item.name }} ({{ item.amount }})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item [selectedItem]="selectedItem" (itemDeleted)="onItemDeleted($event)"></shopping-list-item>
        </section>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService],
    pipes: [FilterPipe]
})

export class ShoppingListComponent implements OnInit {
    // listItems = new Array<ListItem>();
    listItems: Array<ListItem>;
    selectedItem: ListItem;

    constructor(private _shoppingListService: ShoppingListService) {}

    onItemAdded(item: ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelect(item: ListItem) {
        // this.selectedItem = {name: item.name, amount: item.amount}; // For disable two-way binding - have to save manually
        this.selectedItem = item; // reference to one object - two-way binding
    }

    onItemDeleted() {
    // onItemDeleted(item: ListItem) {
        // this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }

    ngOnInit() {
        this.listItems = this._shoppingListService.getItems();
    }
}