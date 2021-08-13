export interface RecetasInterface {
    nombre?:       string;
    ingredientes?: Ingrediente[];
}

interface Ingrediente {
    producto?: string;
    cantidad?: number;
}
