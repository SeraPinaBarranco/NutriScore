export class Productos{
    id?;

    nombre;
    calorias;
    proteinas;
    grasas;
    hidratos;

    constructor(nombre: string,calorias:number, proteinas: number, grasas:number,hidratos:number, id?: string ){
        this.nombre=nombre;
        this.calorias=calorias;
        this.proteinas=proteinas;
        this.grasas=grasas;
        this.hidratos=hidratos;
        this.id = id;
    }
}