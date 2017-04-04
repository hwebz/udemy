import {Component} from 'angular2/core';
import {CustomPropertyBindingComponent} from './custom-property-binding.component';
import {CustomEventBindingComponent} from './custom-event-binding.component';

@Component({
    selector: 'data-binding',
    templateUrl: 'templates/databinding.tpl.html',
    directives: [CustomPropertyBindingComponent, CustomEventBindingComponent]
})

export class DataBindingComponent {
    interpolationString = 'This was inserted with interpolation syntax';
    currentContent = '';
    lastContent = '';
    isMouseOver = false;
    myself = { name: '', age: 0 }
    changed = 'Nothing happened';

    onClick() {
        alert('Clicked!');
    }

    onKeyup() {
        this.currentContent = (<HTMLInputElement> event.target).value;
    }

    onSave(value: string) {
        this.lastContent = value;
    }

    onToggleHover() {
        this.isMouseOver = !this.isMouseOver;
    }

    onCustomClick(value) {
        this.changed = value;
    }
}