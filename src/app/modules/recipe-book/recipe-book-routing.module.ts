import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipeDetailComponent } from "src/app/components/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "src/app/components/recipe-start/recipe-start.component";
import { RecipesEditComponent } from "src/app/components/recipes-edit/recipes-edit.component";
import { RecipesResolverService } from "src/app/services/recipes-resolver.service";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";

const routes: Routes = [
  {
    path: '',
    component: RecipeBookComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipesEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipesEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class RecipeBookRoutingModule {}
