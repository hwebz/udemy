import {Component} from 'angular2/core';
import { HighlightDirective } from './highlight.directive';
import { StructuralDirectives } from "./structural-directives.component";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myHighlight]="'red'">
            Highlight me
        </div>
        <div myHighlight>
            Another highlight me
        </div>
        <hr>
        <h1>Structural Directives</h1>
        <my-structural-directives></my-structural-directives>
    `,
    directives: [HighlightDirective, StructuralDirectives]
})

export class AttributeDirectives {

}