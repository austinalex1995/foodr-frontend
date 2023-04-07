import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteRecipeComponent } from './components/favorite-recipe/favorite-recipe.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { MyRecipesComponent } from './pages/my-recipes/my-recipes.component';
import { RecipeSwipeComponent } from './pages/recipe-swipe/recipe-swipe.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '/signup',
    component: SignupComponent
  },
  {
    path: '/recipes',
    component: RecipeSwipeComponent
  },
  {
    path: '/create_recipe',
    component: CreateRecipeComponent
  },
  {
    path: '/favorite_recipes',
    component: FavoriteRecipeComponent
  },
  {
    path: '/my_recipes',
    component: MyRecipesComponent
  },
  {
    path: '/settings',
    component: SettingsComponent
  },
  {
  path: '**',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
