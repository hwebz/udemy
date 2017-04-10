import { Component, OnInit } from 'angular2/core'
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "../shared/shoping-list.service";

@Component({
    selector: 'my-shopping-list-edit',
    template: `
        <h1>
            {{ingredient === null ? 'Add' : 'Edit'}} Item
        </h1>
        <form id="shopping-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" required [ngModel]="ingredient?.name" ngControl="name">

            <label for="item-amount">Amount</label>
            <input type="text" id="item-amount" required [ngModel]="ingredient?.amount" ngControl="amount">

            <button class="btn" type="submit">{{ingredient === null ? 'Add' : 'Edit'}} Item</button>
            <button class="btn danger" *ngIf="ingredient !== null" (click)="onDelete()">Delete Item</button>
        </form>
    `,
    inputs: ['ingredient'],
    providers: [ShoppingListService],
    styleUrls: ['src/css/shopping-list.css']
})

export class ShoppingListEditComponent implements OnInit {
    ingredient: Ingredient;
    private _ingredientIndex: number;

    constructor(private _shoppingListService: ShoppingListService) {}

    ngOnInit() {
        this._ingredientIndex = this._shoppingListService.getIndexOfItem(this.ingredient);
    }

    onSubmit(f) {
        this.ingredient.name = f.name;
        this.ingredient.amount = f.amount;
        this._shoppingListService.updateItem(this._ingredientIndex, this.ingredient);
    }

    onDelete() {
        this._shoppingListService.deleteItem(this.ingredient);
    }
}