import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import shoppingListData from '../../assets/ingredients-data.json';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListChangedEvent = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private shoppingList = shoppingListData;

  getShoppingList() {
    return this.shoppingList.slice();
  }

  getIngredient(index: number) {
    return this.shoppingList[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingList.push(ingredient);
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }

  addIngredients(ingredients: Array<Ingredient>) {
    this.shoppingList.push(...ingredients);
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }

  deleteIngredient(editedItemIndex: number) {
    this.shoppingList.splice(editedItemIndex, 1);
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }

  updateIngredient(editedItemIndex: number, newIngredient: Ingredient) {
    this.shoppingList[editedItemIndex] = newIngredient;
    this.shoppingListChangedEvent.next(this.shoppingList.slice());
  }
}
