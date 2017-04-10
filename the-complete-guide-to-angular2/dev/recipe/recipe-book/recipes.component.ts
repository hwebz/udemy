import { Component } from 'angular2/core'
import { RecipeListComponent } from "./recipe-list.component";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { RecipeDetailComponent } from "./recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit.component";

@Component({
    template: `
        <div class="master list">
            <my-recipe-list></my-recipe-list>
        </div>
        <div class="master detail">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/', name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true
    },
    {
        path: '/:editMode', name: 'RecipeEdit', component: RecipeEditComponent
    }
])

export class RecipesComponent {

}