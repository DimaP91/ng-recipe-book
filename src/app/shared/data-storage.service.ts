import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

const API_URL = 'https://ng-recipe-book-e1671.firebaseio.com/recipes.json';

@Injectable()
export class DataStorageService {
  constructor( private httpClient: HttpClient,
               private recipeService: RecipeService,
               private authService: AuthService ) {}

  storeRecipes() {
    return this.httpClient.put(API_URL, this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>(API_URL)
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => this.recipeService.setRecipes(recipes)
      );
  }
}
