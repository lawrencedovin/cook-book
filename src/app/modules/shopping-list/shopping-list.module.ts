import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from 'src/app/components/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    // ANGULAR MODULES
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent },
    ])
  ]
})
export class ShoppingListModule { }
