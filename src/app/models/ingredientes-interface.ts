export interface IngredientesInterface {
  nombre:       string;
  ingredientes: Ingredientes[];
}

export interface Ingredientes {
  producto: string;
  cantidad: number;
}
