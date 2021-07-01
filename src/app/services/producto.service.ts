import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore: AngularFirestore) { }

  obternerProductos():Observable<any>{
    return this.firestore.collection('productos').valueChanges();
  }

 
}
