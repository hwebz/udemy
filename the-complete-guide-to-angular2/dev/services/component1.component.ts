import { Component } from 'angular2/core';
import { LoggingService } from "./services/logging.service";
import { CalculatorService } from "./services/calculator.service";
import { DataService } from "./services/data.service";

@Component({
    selector: 'component-1',
    template: `
        <div>
            <h1>Logging service</h1>
            <input type="text" #message />
            <button (click)="onLog(message.value)">Send</button>
        </div>
        <div>
            <h1>Calculator Service</h1>
            <p>Add or multiply these two number:</p>
            <input type="text" #num1>
            <input type="text" #num2>
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <button (click)="onAdd(num1.value, num2.value)">Add</button>
            <br>
            <p>Result: {{ result }}</p>
            <input type="text" #newData>
            <button (click)="onInsert(newData.value)">Insert New Data</button>
        </div>
        <div>
            <h1>Data Servoce</h1>
            <button (click)="onGetData()">Get Some Data</button>
            <p>Data: {{ data }}</p>
        </div>
    `,
    providers: [LoggingService, CalculatorService, DataService]        
})

export class Component1Component {
    
    result: string;
    data: string;

    constructor(private _loggingService: LoggingService, private _calculatorService: CalculatorService, private _dataService: DataService) {}

    onLog(message: string) {
        this._loggingService.log(message);
    }

    onMultiply(num1: number, num2: number) {
        this.result = '' + this._calculatorService.multiply(+num1, +num2);
    }

    onAdd(num1: number, num2: number) {
        this.result = '' + this._calculatorService.add(+num1, +num2);
    }

    onGetData() {
        this.data = this._dataService.getRandomString();
    }

    onInsert(value: string) {
        this._dataService.insert(value);
    }
}