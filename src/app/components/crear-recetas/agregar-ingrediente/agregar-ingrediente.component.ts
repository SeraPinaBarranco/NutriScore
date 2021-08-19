import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredientes } from 'src/app/models/ingredientes-interface';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-agregar-ingrediente',
  templateUrl: './agregar-ingrediente.component.html',
  styleUrls: ['./agregar-ingrediente.component.css'],
})
export class AgregarIngredienteComponent implements OnInit {
  @Input() nombreReceta: string;
  @Output() nuevoIngredienteEvent = new EventEmitter<Ingredientes>();
  form: FormGroup = new FormGroup({});
  productos: Productos[] = [];
  producto: string;

  constructor(private _productoSevice: ProductoService) {}

  ngOnInit(): void {
    this._productoSevice.obternerProductos().subscribe((data) => {
      let producto: any;

      data.forEach((p: any) => {
        producto = {
          nombre: p.payload.doc.data().nombre,
          calorias: p.payload.doc.data().calorias,
          proteinas: p.payload.doc.data().proteinas,
          grasas: p.payload.doc.data().grasas,
          hidratos: p.payload.doc.data().hidratos,
        };

        this.productos.push(producto);
      });
      //console.log(this.productos);
    });

    this.crearFormulario();
  }

  addNewItem(producto: string, cantidad: number) {
    //const p = this.productos.find((element) => element.nombre === 'Manzana'); //busca un elemento de un array
    //console.log(p);

    let ing: Ingredientes = { producto, cantidad };
    
    if(this.form.status==="VALID")this.nuevoIngredienteEvent.emit(ing);
    
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = new FormGroup({
      ingrediente: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      cantidad: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }
}
