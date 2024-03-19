import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "src/app/models/recipe.model";
// import recipesData from "../../assets/recipes-data.json";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  // private recipes: Array<Recipe> = recipesData;
  private recipes: Array<Recipe> = [];
  recipesChanged = new Subject<Recipe[]>();

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // Returns new array which us an exact copy of the recipes array
    return this.recipes.slice();
  }

  getRecipe(id: number){
    const recipe = this.recipes.find(
      (recipe) => {
        return recipe.id === id;
      }
    );
    return recipe;
  }

  addRecipe(id: number, recipe: Recipe) {
    recipe = {id, ...recipe}
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes = this.recipes.filter(item => item !== recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const index = id - 1;
    this.recipes[index] = {id, ...newRecipe};
    this.recipesChanged.next(this.recipes.slice());
  }

  newIDGenerated(): number {
    return this.recipes.length + 1;
  }
}
