import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.ingredients = ingredientService.getIngredients();
  }

  changeStatus(pos: number): void {
    this.ingredientService.changeStatus(pos);
  }

}
