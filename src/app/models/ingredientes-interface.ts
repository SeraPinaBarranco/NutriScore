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
  producto: string;
  totalCalorias:  number;
  totalProteinas: number;
  totalGrasas:    number;
  totalHidratos:  number;
}
