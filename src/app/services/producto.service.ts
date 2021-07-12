import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { Productos } from '../models/productos.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private producto$= new Subject<any>();

  constructor(private firestore: AngularFirestore, private router:Router) { }

  obternerProductos():Observable<any>{
    return this.firestore.collection('productos').snapshotChanges();
  }

  guardarProducto(producto:Productos):Promise<any>{
    return this.firestore.firestore.collection('productos').add(producto);
  }

  eliminarProducto(id:string):Promise<any>{
    return this.firestore.collection('productos').doc(id).delete();}

  addProductoEdit(producto:Productos){
    this.producto$.next(producto);//Emite el valor recibido por parametro
    //this.router.navigate(['/add']);
  }
  getProductoEdit():Observable<Productos>{
    return this.producto$.asObservable();
  }
}
