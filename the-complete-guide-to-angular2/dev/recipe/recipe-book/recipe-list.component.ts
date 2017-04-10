import { Component, OnInit } from 'angular2/core';
import { Recipe } from "../shared/recipe";
import { RecipeService } from "./recipe.service";
import { Router } from "angular2/router";

@Component({
    selector: 'my-recipe-list',
    template: `
        <h1>Recipe List</h1>
        <div class="list-items">
            <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
            <ul>
                <li *ngFor="#item of recipeList" (click)="onSelect(item)">
                    <div class="img">
                        <img [src]="item.imageUrl">
                    </div>
                    <div class="text">{{item.name}}</div>
                </li>
            </ul>
        </div>
    `,
    providers: [RecipeService],
    styleUrls: ['src/css/recipe.css']
})

export class RecipeListComponent implements OnInit {
    recipeList: Recipe[];

    constructor(private _recipeService: RecipeService, private _router: Router) {}

    ngOnInit() {
        this.recipeList = this._recipeService.getAllRecipes();
    }

    onSelect(item: Recipe) {
        this._router.navigate(['RecipeDetail', {recipeIndex: Number(this._recipeService.getRecipeIndex(item))}]);
    }

    onAddRecipe() {
        this._router.navigate(['RecipeEdit', {editMode: 'create'}]);
    }
}