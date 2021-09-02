export class Recetas{
    nombre:string;
    ingredientes: Ingredientes[];
    totales: Totales[];
    constructor(){}
}

class Ingredientes{
    producto:string;
    cantidad:number;
    constructor(){}
}

class Totales {
    producto: string;
    totalCalorias:  number;
    totalProteinas: number;
    totalGrasas:    number;
    totalHidratos:  number;
  }
