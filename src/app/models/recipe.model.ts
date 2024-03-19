import { Ingredient } from "./ingredient.model";

export class Recipe {
  public id: number
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Array<Ingredient>;

  constructor(id: number, name: string, description: string, imagePath: string, ingredients: Array<Ingredient>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients
  }
}
