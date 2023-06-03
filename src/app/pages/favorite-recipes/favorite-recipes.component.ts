import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent {

  /**
   * Member Variables
   */

  recipes : Recipe[] = [];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}
