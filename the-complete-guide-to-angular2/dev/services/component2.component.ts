import { Component } from 'angular2/core';
import { LoggingService } from "./services/logging.service";

@Component({
    selector: 'component-2',
    template: `
        <input type="text" #message />
        <button (click)="onLog(message.value)">Send</button>
    `,
    providers: [LoggingService]
})

export class Component2Component {
    constructor(private _loggingService: LoggingService) {}

    onLog(message: string) {
        this._loggingService.log(message);
    }
}