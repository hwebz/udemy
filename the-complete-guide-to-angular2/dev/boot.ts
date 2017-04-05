///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import { AppComponent } from "./app.component";
// import { LoggingService } from "./services/services/logging.service";

bootstrap(AppComponent);
// Using service providers globally for all components
// bootstrap(AppComponent, [LoggingService]);