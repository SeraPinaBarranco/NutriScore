import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-agregar-ingrediente',
  templateUrl: './agregar-ingrediente.component.html',
  styleUrls: ['./agregar-ingrediente.component.css']
})
export class AgregarIngredienteComponent implements OnInit {
  @Input() nombreReceta:string;
  @Output() nuevoIngredienteEvent = new EventEmitter<number>();
  form: FormGroup = new FormGroup({});
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
    this.crearFormulario();
  }

  addNewItem(value: number) {
    this.nuevoIngredienteEvent.emit(value);
    
  }

  crearFormulario(){
    this.form = new FormGroup({
      ingrediente: new FormControl('Ingrediente', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      cantidad : new FormControl(0, [
        Validators.required,
        Validators.min(1)
      ] )
    });
  }
  
}
