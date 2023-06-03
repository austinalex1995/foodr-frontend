import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-favorite-recipe-list',
  templateUrl: './favorite-recipe-list.component.html',
  styleUrls: ['./favorite-recipe-list.component.css']
})
export class FavoriteRecipeListComponent {

  /**
   * Member Variables
   */

  @Input()
  recipes : Recipe[] = [];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}
