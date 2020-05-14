import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthenticationService } from '../auth/auth.service';

@Injectable()
export class DataStorage {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthenticationService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-c1a72.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
      const token = this.authService.getToken();
      return this.http.get('https://ng-recipe-book-c1a72.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
          (response: Recipe[]) => {
              for (const recipe of response) {
                  if (!recipe['ingredients']) {
                      console.log(recipe);
                      recipe['ingredients'] = [];
                  }
              }
              this.recipeService.setRecipes(response);
          });
  }
}
