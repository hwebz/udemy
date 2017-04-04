import {Component, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey {{ name }} and I am {{ myAge }} years old.</p>
        <p>My addres: {{ address }}</p>

        <h4>My hobbies are: </h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies />
        <!-- <input type="text" (keyup)="onHobbiesChanged($event.target.value)" /> -->
    `,
    inputs: ['name:myName', 'myAge'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
    name = '';
    myAge = 20;
    @Input('myAddress') address = 'No data found';
    
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string) {
        this.hobbiesChanged.emit(hobbies);
    }
}