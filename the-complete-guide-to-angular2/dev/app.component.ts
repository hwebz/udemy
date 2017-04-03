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

import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component';

@Component({
    selector: 'my-app',
    template: `
        <my-puzzle></my-puzzle>
    `,
    directives: [PuzzleComponent]
})

export class AppComponent {

}