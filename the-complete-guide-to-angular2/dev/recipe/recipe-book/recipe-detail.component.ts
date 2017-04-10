import { Component, OnInit } from 'angular2/core'
import { Recipe } from "../shared/recipe";
import { RouteParams, Router } from "angular2/router";
import { RecipeService } from "./recipe.service";
import { ShoppingListService } from "../shared/shoping-list.service";

@Component({
    templateUrl: 'templates/recipes/recipe-detail.tpl.html',
    providers: [RecipeService, ShoppingListService],
    styleUrls: ['src/css/recipe-detail.css']
})

export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    private _recipeIndex: string;
    
    constructor(private _routeParams: RouteParams, private _recipeService: RecipeService, private _router: Router, private _shoppingListService: ShoppingListService) {}

    ngOnInit():any {
        this._recipeIndex = this._routeParams.get('recipeIndex');
        this.recipe = this._recipeIndex != null ? this._recipeService.getRecipe(+this._recipeIndex) : null;
    }

    onEdit() {
        this._router.navigate(['RecipeEdit', {editMode: 'edit', itemIndex: this._recipeIndex}]);
    }

    onDelete() {
        this._recipeService.deleteRecipe(this.recipe);
        this._router.navigate(['RecipeDetail']);
    }

    onAddToShoppingList() {
        this._shoppingListService.insertItems(this.recipe.ingredients);

    }
}