import { Component, OnInit } from 'angular2/core';
import { RouteParams, RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { Comp1MainComponent } from "./comp1-main.component";
import { Comp1SubComponent } from "./comp1-sub.component";

@Component({
    template: `
        <h1>Router - Content from Component 1</h1>
        <div>
            Source was {{ source }}
        </div>
        <div *ngIf="optional != null">
            Optional: {{ optional }}
        </div>
        <div><a [routerLink]="['Component1Main']">Main</a></div>
        <div><a [routerLink]="['Component1Sub']">Sub</a></div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true
    },
    {
        path: '/subroute', name: 'Component1Sub', component: Comp1SubComponent
    }
])

export class Component1Component implements OnInit {
    source: string;
    optional: string;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit():any {
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}