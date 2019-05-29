import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ngrecipebook-22412.firebaseio.com/recipes.json', 
            this.recipeService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ngrecipebook-22412.firebaseio.com/recipes.json')
            .pipe(map((response:Recipe[])=> {
                for(let recipe of response) {
                    if(!recipe.ingredients) {
                        recipe.ingredients = [];
                    }
                                    
                    return response; 
                }
            }))
            .subscribe((recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            });
    }
}