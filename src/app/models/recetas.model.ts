export class Recetas{
    nombre:string;
    ingredientes: Ingredientes[];
    constructor(nombre:string, ingredientes:Ingredientes[]){}
}

class Ingredientes{
    producto:string;
    cantidad:number;
    constructor(producto:string,
                cantidad:number){}
}