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

/* import { Component } from 'angular2/core';
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

} */

/* import { Component } from 'angular2/core';
import { Component1Component } from "./services/component1.component";
import { Component2Component } from "./services/component2.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>First component</h1>
        <component-1></component-1>
        <br>
        <h1>Second component</h1>
        <component-2></component-2>
    `,
    directives: [Component1Component, Component2Component]
})

export class AppComponent {
    
} */

/* import { Component } from 'angular2/core';
import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-template-driven></my-template-driven>
    `,
    directives: [TemplateDrivenFormComponent]
})

export class AppComponent {
    
} */

/* import { Component } from 'angular2/core';
import { DataDrivenFormComponent } from "./forms/data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-data-driven></my-data-driven>
    `,
    directives: [DataDrivenFormComponent]
})

export class AppComponent {
    
}*/

// Pipes
/*import { Component } from 'angular2/core';
import { ReversePipe } from "./pipes/reverse.pipe";

@Component({
    selector: 'my-app',
    template: `
        <section class="container">
            <h2>The Date Pipe</h2>
            <!-- Prepare document with different values which can be used to configure output (for all pipes!) -->
            <p>Today is: {{today | date: 'short'}}</p>
            <p>Today is: {{today | date }}</p>
            <p>Today is: {{today | date: 'longDate' }}</p>
            <p>Today is: {{today | date: 'ymd' }}</p>
        </section>

        <section class="container">
            <h2>The lowercase and UPPERCASE Pipe</h2>
            <input type="text" #inputCasePipes (keyup)="0" value="First value"><br>
            <div>Output Lowercase: {{ inputCasePipes.value | lowercase }}</div>
            <div>Output Uppercase: {{ inputCasePipes.value | uppercase }}</div>
        </section>

        <section class="container">
            <h2>The Slice Pipe</h2>
            <input type="text" #inputSlicePipe (keyup)="0" value="First value"> - from <input type="text" #start (keyup)="0" value="1"> to <input type="text" #end (keyup)="0" value="3"><br>
            <div>Output: {{ inputSlicePipe.value | slice:start.value:end.value }}</div>
        </section>

        <section class="container">
            <h2>Number Pipes</h2>
            <input type="text" #inputNumberPipes (keyup)="0" value="32000"> - currency: <input type="text" #currency value="EUR" (keyup)="0"><br>
            <div>Decimal: {{ 1.0 * inputNumberPipes.value | number:'1.1-2' }}</div>
            <div>Currency: {{ 1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2' }}</div>
            <input type="checkbox" #currencyShort checked (change)="0"> Short currency code
        </section>

        <section class="container">
            <h2>Chaining multiple Pipes (e.g. uppercase and slice)</h2>
            <input type="text" #inputChainPipes (keyup)="0"><br>
            <div>Output: {{ inputChainPipes.value | slice:1:3 | uppercase }}</div>
        </section>

        <section class="container">
            <h2>Custom Pipe (reverse string)</h2>
            <input type="text" #inputCustomPipe (keyup)="0"><br>
            <div>Output: {{ inputCustomPipe.value | myReverse }}</div>
        </section>

        <section class="container">
            <h2>Async (stateful) pipes</h2>
            <div>Output (received after 2s): {{ stateFulPipeOutput | async }}</div>
        </section>
    `,
    pipes: [ReversePipe]
})

export class AppComponent {
    today = new Date();

    stateFulPipeOutput = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data is there!'), 2000);
    });
} */

// Routers
/* import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";
import { Component1Component } from "./routers/component1.component";
import { Component2Component } from "./routers/component2.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <ul>
                <li><a [routerLink]="['Component1', {source: 'AppComponent'}]">Component 1</a></li>
                <li><a [routerLink]="['Component2']">Component 2</a></li>
            </ul>
        </header>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/component-1/:source/...', name: 'Component1', component: Component1Component
    },
    {
        path: '/component-2', name: 'Component2', component: Component2Component, useAsDefault: true
    }
])

export class AppComponent {

} */

import { Component } from 'angular2/core';
import { HttpService } from "./http/http.service";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div class="input">
                <label for="title">Title</label>
                <input type="text" id="title" #title>
            </div>
            <div class="input">
                <label for="body">Body</label>
                <input type="text" id="body" #body>
            </div>
            <div class="input">
                <label for="user-id">User ID</label>
                <input type="text" id="user-id" #userId>
            </div>
            <button (click)="onPost(title.value, body.value, userId.value)">Post Data</button>
            <button (click)="onGetPosts()">Get all Posts</button>
            <p>Response: {{response | json}}</p>
        </div>
    `,
    providers: [HttpService]
})

export class AppComponent {
    response: string;
    
    constructor(private _httpService: HttpService) {}

    onGetPosts() {
        this._httpService.getPosts()
            .subscribe(res => this.response = res,
                        error => console.log(error));
    }

    onPost(title: string, body: string, userId: string) {
        this._httpService.createPost({title: title, body: body, userId: userId})
                .subscribe(res => this.response = res,
                error => console.log(error));
    }
}