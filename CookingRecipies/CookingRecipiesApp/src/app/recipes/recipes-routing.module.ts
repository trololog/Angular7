import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';

const recipeRoutes: Routes = [
        { 
            path: 'recipes',
            component: RecipesComponent,
            canActivate: [AuthGuard],
            children: [
                    { 
                        path: '', 
                        component: RecipeMainComponent 
                    },
                    { 
                        path: 'new', 
                        component: RecipeEditComponent 
                    },
                    { 
                        path: ':id', 
                        component: RecipeDetailComponent, 
                        resolve: [ RecipesResolverService ] 
                    },
                    { 
                        path: ':id/edit', 
                        component: RecipeEditComponent 
                    }
            ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}