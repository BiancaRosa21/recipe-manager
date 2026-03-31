export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cuisine: string;
  cookTimeMinutes: number;
  baseServings: number;
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
};
