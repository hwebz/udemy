///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import { AppComponent } from "./app.component";
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from "angular2/http";
// import { LoggingService } from "./services/services/logging.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
// Using service providers globally for all components
// bootstrap(AppComponent, [LoggingService]);