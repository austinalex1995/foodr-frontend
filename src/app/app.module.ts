import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecipeSwipeComponent } from './pages/recipe-swipe/recipe-swipe.component';
import { FavoriteRecipesComponent } from './pages/favorite-recipes/favorite-recipes.component';
import { MyRecipesComponent } from './pages/my-recipes/my-recipes.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FavoriteRecipeComponent } from './components/favorite-recipe/favorite-recipe.component';
import { SwipeRecipeComponent } from './components/swipe-recipe/swipe-recipe.component';
import { FavoriteRecipeListComponent } from './components/favorite-recipe-list/favorite-recipe-list.component';
import { CreateRecipeFormComponent } from './components/create-recipe-form/create-recipe-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RecipeSwipeComponent,
    FavoriteRecipesComponent,
    MyRecipesComponent,
    CreateRecipeComponent,
    SettingsComponent,
    LoginFormComponent,
    SignupFormComponent,
    FavoriteRecipeComponent,
    SwipeRecipeComponent,
    FavoriteRecipeListComponent,
    CreateRecipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
