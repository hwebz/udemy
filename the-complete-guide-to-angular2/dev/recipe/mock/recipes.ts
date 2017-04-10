import { Recipe } from "../shared/recipe";
import { Ingredient } from "../shared/ingredient";

export let RECIPES: Recipe[] = [
    new Recipe("Wiener Schnitzel",
                "A tasty Schnitzel", 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1200px-Wiener-Schnitzel02.jpg",
                [
                    new Ingredient("Pork Meat", 1),
                    new Ingredient("French Fries", 1),
                    new Ingredient("Salad", 2)
                ]),
    new Recipe("Super Maga Burger",
                "Tastes so delicious!", 
                "http://burgerking.vn/media/uploads/images/New%20Update%20Item/BB_WHOPPER-v1-min.png",
                [
                    new Ingredient("Buns", 4),
                    new Ingredient("Salad", 1),
                    new Ingredient("Paddies", 4),
                    new Ingredient("Vegetables", 2)
                ])
]