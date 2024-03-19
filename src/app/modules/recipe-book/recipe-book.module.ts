import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from 'src/app/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'src/app/components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/app/components/recipe-list/recipe-list.component';
import { RecipeStartComponent } from 'src/app/components/recipe-start/recipe-start.component';
import { RecipesEditComponent } from 'src/app/components/recipes-edit/recipes-edit.component';
import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeBookComponent,
    RecipeStartComponent,
    RecipesEditComponent
  ],
  imports: [
    // ANGULAR MODULES
    SharedModule,
    ReactiveFormsModule,
    RecipeBookRoutingModule
  ]
})
export class RecipeBookModule { }
