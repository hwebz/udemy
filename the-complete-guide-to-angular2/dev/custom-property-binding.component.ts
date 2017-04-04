import {Component, Input} from 'angular2/core';

@Component({
    selector: 'custom-property-binding',
    template: `
        <p>{{myName}}</p>
        <p>{{name}}</p>
    `,
    inputs: ['myName']
})

export class CustomPropertyBindingComponent {
    myName = '';
    @Input('name2') name = '';
}