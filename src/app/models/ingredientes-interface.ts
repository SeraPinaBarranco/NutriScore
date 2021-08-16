export interface IngredientesInterface {
  nombre:       string;
  ingredientes: Ingredientes[];
  totales:      Totales[];
}

export interface Ingredientes {
  producto: string;
  cantidad: number;
}

export interface Totales {
  totalCalorias:  number;
  totalProteinas: number;
  totalGrasas:    number;
  totalHidratos:  number;
}
