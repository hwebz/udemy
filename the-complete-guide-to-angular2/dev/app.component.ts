/* import {Component} from 'angular2/core';
import {MyComponentComponent} from'./my-component.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{ changeWelcomeMessage() }}</h1>
        <p>Hello World!</p>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {
    title: string = "Hello World";

    changeWelcomeMessage() {
        let transformed = this.title.toLowerCase();
        return transformed;
    }
} */

/* import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component';

@Component({
    selector: 'my-app',
    template: `
        <my-puzzle></my-puzzle>
    `,
    directives: [PuzzleComponent]
})

export class AppComponent {

} */

/* import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()}}

        <!--<input type="text" value="{{ name }}" class="{{ 'red' }}">-->
        <!--<input type="text" [value]="name" [class.red]="true" />-->
        <!--<input type="text" [value]="name" [ngClass]="'red'" />-->
        <!--<input type="text" [value]="name" [ngClass]="{red: true}" [disabled]="1 === 1" />-->

        <input type="text" [value]="name" [ngClass]="{red: true}" (keyup)="onKeyup(inputElement.value)" #inputElement />
        <p>{{ values }}</p>
        <br><br>
        <input type="text" [(ngModel)]="name" />
        <p>Your name: {{ name }}</p>
    `
})

export class AppComponent {
    
    name = 'Max';
    values = '';

    onTest() {
        return 1 === 1;
    }

    onKeyup(value: string) {
        this.values += value + ' | ';
    }
} */

/* import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <p>Hey</p>
            <input type="text" [(ngModel)]="name" />
            <br><br>
            <section class="child">
                <my-property-binding [myName]="name" [myAge]="26" [myAddress]="'321 Manchester United'" (hobbiesChanged)="hobbies = $event"></my-property-binding>
            </section>
            <p>My hobbies are: {{ hobbies }}</p>
        </section>
    `,
    directives: [PropertyBindingComponent]
})

export class AppComponent {
   name = '';
   hobbies = '';
} */

/* import {Component} from 'angular2/core';
import {DataBindingComponent} from './databinding.component';

@Component({
    selector: 'my-app',
    template: `
        <data-binding></data-binding>
    `,
    directives: [DataBindingComponent]
})

export class AppComponent {
   
} */

/* import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        
         <div class="container">
             <my-input (submitted)="onSubmit($event)" [myself]="myself"></my-input>
         </div>
         <div class="container">
             <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
         </div>       
    `,
    directives: [InputComponent, ConfirmComponent]
})

export class AppComponent {
    myself = {
        name: '',
        age: ''
    };
    confirmedMyself = {
        name: '',
        age: ''
    };

   onSubmit(myself: {name: string, age: string}) {
        // this.myself = myself;
        this.myself = {
            name: myself.name,
            age: myself.age
        };
   }

   onConfirm(myself: {name: string, age: string}) {
        // this.confirmedMyself = myself;
        this.confirmedMyself = {
            name: myself.name,
            age: myself.age
        };
   }
} */

/* import {Component} from 'angular2/core';
import {AttributeDirectives} from './attribute-directives.component';

@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
    `,
    directives: [AttributeDirectives]
})

export class AppComponent {

} */

import { Component } from 'angular2/core';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="brand">Shopping List</div>
        </header>
        <div class="main">
            <my-shopping-list></my-shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})

export class AppComponent {

}