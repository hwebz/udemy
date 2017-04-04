import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'custom-event-binding',
    template: `
        <button (click)="onMyClicked('Changed from custom event child component -> myClick')">MyClick</button>
        <button (click)="onClick2('Changed from custom event child component -> click2')">click2</button>
    `,
    outputs: ['myClick', 'click2']
})

export class CustomEventBindingComponent {
    myClick = new EventEmitter<string>();
    click2 = new EventEmitter<string>();

    onMyClicked(value: string) {
        this.myClick.emit(value);
    }

    onClick2(value: string) {
        this.click2.emit(value);
    }
}