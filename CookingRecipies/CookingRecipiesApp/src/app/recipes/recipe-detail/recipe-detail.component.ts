import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  paramsSubscription: Subscription;
  recipeId: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
    this.recipeId = +this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
        this.recipeId = +params['id'];
      });
  }

  onAddIngredients() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.recipeId);
    this.router.navigate(['recipes']);
  }
}
