import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-agregar-ingrediente',
  templateUrl: './agregar-ingrediente.component.html',
  styleUrls: ['./agregar-ingrediente.component.css']
})
export class AgregarIngredienteComponent implements OnInit {
  @Input() nombreReceta:string;
  @Output() nuevoIngredienteEvent = new EventEmitter<string>();

  productos: Productos[] = [];

  constructor(private _productoSevice: ProductoService) { }

  ngOnInit(): void {
    this._productoSevice.obternerProductos().subscribe(data =>{
      let producto: any;

      data.forEach((p:any) =>{
        producto={
          nombre : p.payload.doc.data().nombre,
          calorias:p.payload.doc.data().calorias,
          proteinas:p.payload.doc.data().proteinas,
          grasas:p.payload.doc.data().grasas,
          hidratos:p.payload.doc.data().hidratos
        }

        this.productos.push(producto);
      })
    });
    console.log(this.productos);
  }

  addNuevoIngrediente(value: string) {
    this.nuevoIngredienteEvent.emit(value);
  }

}
