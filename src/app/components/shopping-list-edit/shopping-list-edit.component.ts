import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListEditForm', {static: false}) shoppingListEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(index => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListEditForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
        // Used to populate the form input on the clicked ingredient.
      });
  }

  onEdit(typeOfEdit: string, form?: NgForm) {
    switch(typeOfEdit) {
      case 'submit':
        const value = form.value;
        const newIngredient = {'name': value.name, 'amount': value.amount};
        if(this.editMode) this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        else this.shoppingListService.addIngredient(newIngredient);
      break;
      case 'delete':
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
      break;
      case 'clear':
      break;
      default:
        throw new Error('Invalid input');
    }
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
