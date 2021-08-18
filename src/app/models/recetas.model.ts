export class Recetas{
    nombre:string;
    ingredientes: Ingredientes[];
    totales: Totales[];
    constructor(){}
}

class Ingredientes{
    producto:string;
    cantidad:number;
    constructor(producto:string,
                cantidad:number){}
}

class Totales {
    producto: string;
    totalCalorias:  number;
    totalProteinas: number;
    totalGrasas:    number;
    totalHidratos:  number;
  }
