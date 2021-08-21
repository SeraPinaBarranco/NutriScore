export class Productos{
    id?:string;

    nombre:string;
    calorias:number;
    proteinas:number;
    grasas:number;
    hidratos:number;
    azucares:number;

    constructor(nombre: string,calorias:number, proteinas: number, grasas:number,hidratos:number, azucares:number, id?: string ){
        // this.nombre=nombre;
        // this.calorias=calorias;
        // this.proteinas=proteinas;
        // this.grasas=grasas;
        // this.hidratos=hidratos;
        // this.id = id;
    }
}
