import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css']
})
export class FavoriteRecipeComponent {

  /**
   * Member Variables
   */

  @Input()
  recipe : Recipe = { };

  

  /**
   * Class Methods
   */

}
