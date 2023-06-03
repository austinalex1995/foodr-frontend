import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent {

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
