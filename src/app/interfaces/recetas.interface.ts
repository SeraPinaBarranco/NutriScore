export interface RecetasInterface {
    nombre?:       string;
    ingredientes?: Ingrediente[];
}

export interface Ingrediente {
    producto?: string;
    cantidad?: number;
}
