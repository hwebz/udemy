import { Component } from 'angular2/core';
import { Router, CanDeactivate, ComponentInstruction } from "angular2/router";

@Component({
    template: `
        <h1>Router - Content from Component 2</h1>
        <button (click)="onNavigate()">Take me to Component 1</button>
    `
})

export class Component2Component implements CanDeactivate {
    constructor(private _router: Router) {}

    onNavigate() {
        // this._router.navigate(['Component1']);
        // this._router.navigate(['Component1', {source: 'Component 2'}]);
        this._router.navigate(['Component1', {source: 'Component 2', optional: 'This is optional param'}]);
    }

    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction):any {
        return alert("Sure?");
    }
}