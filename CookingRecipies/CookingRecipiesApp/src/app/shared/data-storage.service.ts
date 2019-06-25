import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        return this.http.put('https://ngrecipebook-22412.firebaseio.com/recipes.json', recipes)
          .subscribe((response) => {
            console.log(response);
          });
    }

    fetchRecipes() {
      return this.http.get<Recipe[]>('https://ngrecipebook-22412.firebaseio.com/recipes.json')
        .pipe(
          map((recipes) => {
            return recipes.map(recipe => {
              return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            })
          }),
          tap(recipes => {
            this.recipeService.setRecipes(recipes);
          })
        );
    }
}
