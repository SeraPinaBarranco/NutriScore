export class Recetas{
    nombre:string;
    ingredientes: Ingredientes[];
    constructor(){}
}

class Ingredientes{
    producto:string;
    cantidad:number;
    constructor(producto:string,
                cantidad:number){}
}
