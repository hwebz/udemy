import { Component, EventEmitter, OnInit } from 'angular2/core';
import { ListItem } from "./list-item";
import { ShoppingListService } from "./services/shopping-list.service";
import { ControlGroup, FormBuilder, Control, Validators } from "angular2/common";

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class="input">
                <label for="item-name">Name</label>
                <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']" />
            </div>
            <div class="input">
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']" />
            </div>
            <!--<button type="submit" (click)="onClick()" [disabled]="!myForm.valid">Add Item</button>-->
            <button type="submit" [disabled]="!myForm.valid">Add Item</button>
        </form>
    `,
    outputs: ['itemAdded']
})

export class ShoppingListNewItemComponent implements OnInit {
    item = {
        name: '',
        amount: 0
    };
    itemAdded = new EventEmitter<ListItem>();
    myForm: ControlGroup;

    constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}

    onClick() {
        // this.itemAdded.emit(this.item);
        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }

    onSubmit() {
        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }

    ngOnInit() {
        this.myForm = this._formBuilder.group({
            'itemName': ['', Validators.required],
            'itemAmount': ['', Validators.compose([
                Validators.required,
                greaterZero
            ])]
        });
    }
}

function greaterZero(control: Control): {[s: string]: boolean} {
    if (control.value <= 0) {
        return {notEnough: true};
    }
}