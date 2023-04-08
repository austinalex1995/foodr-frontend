import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { FavoriteRecipesComponent } from './pages/favorite-recipes/favorite-recipes.component';
import { LoginComponent } from './pages/login/login.component';
import { MyRecipesComponent } from './pages/my-recipes/my-recipes.component';
import { RecipeSwipeComponent } from './pages/recipe-swipe/recipe-swipe.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'recipes',
    component: RecipeSwipeComponent
  },
  {
    path: 'create_recipe',
    component: CreateRecipeComponent
  },
  {
    path: 'favorite_recipes',
    component: FavoriteRecipesComponent
  },
  {
    path: 'my_recipes',
    component: MyRecipesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
  path: '**',
  component: LoginComponent
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
