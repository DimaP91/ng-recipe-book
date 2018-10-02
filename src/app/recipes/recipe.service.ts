import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Baked Chicken Schnitzel',
      // tslint:disable-next-line:max-line-length
      'Growing up, chicken schnitzel was a classic. I decided to make this dish oven-friendly using less oil, and an easier cleanup. This dish tastes great with potato salad, or mashed potatoes and a nice crisp salad. Tastes great the next day cold too! It\'s a family-favorite! Enjoy with fresh squeezed lemon juice.',
      'https://images.media-allrecipes.com/userphotos/720x405/5349279.jpg',
      [
        new Ingredient('tablespoon olive oil', 1),
        new Ingredient('chicken breasts,', 6),
        new Ingredient('tablespoon paprika', 1),
        new Ingredient('eggs', 2),
        new Ingredient('cups seasoned bread crumbs', 2),
        new Ingredient('large lemon', 1),
      ]),
    new Recipe(
      'Big Massive Burger',
      // tslint:disable-next-line:max-line-length
      'This tasted amazing, even though I accidentally put double the pepper in the sauce... You will definitely have lots of left over sauce, you could even make 2 burgers',
      'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/108100.jpg',
      [
        new Ingredient('salt', 1),
        new Ingredient('pepper', 1),
        new Ingredient('burger buns', 1),
        new Ingredient('slice american cheese', 1),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
