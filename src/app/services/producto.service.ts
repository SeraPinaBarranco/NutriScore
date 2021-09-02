import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable, Subject, from } from 'rxjs';
import { IngredientesInterface } from '../models/ingredientes-interface';
import { Productos } from '../models/productos.model';
import { Recetas } from '../models/recetas.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private producto$= new Subject<any>();

  constructor(private firestore: AngularFirestore, private router:Router) { }

  obternerProductos():Observable<any>{
    return this.firestore.collection('productos',ref=> ref.orderBy('nombre','asc')).snapshotChanges();
  }

  obtenerRecetas():Observable<any>{
    return this.firestore.collection('recetas', ref => ref.orderBy('nombre','asc')).snapshotChanges();
  }

  guardarProducto(producto:Productos):Promise<any>{
    return this.firestore.firestore.collection('productos').add(producto);
  }
  guardarReceta(receta:any):Promise<any>{
    return this.firestore.firestore.collection('recetas').add(receta);
  }

  eliminarProducto(id:string):Promise<any>{
    return this.firestore.collection('productos').doc(id).delete();}

  addProductoEdit(producto:Productos){
    this.producto$.next(producto);//Emite el valor recibido por parametro
    //this.router.navigate(['/add']);
  }

  getProductoEdit(id:string):Observable<any>{
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }

  editProducto(id:string,producto:Productos):Promise<any>{
    return this.firestore.firestore.collection('productos').doc(id).update(producto);
  }
}
