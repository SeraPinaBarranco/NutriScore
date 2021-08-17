import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredientes, Totales } from 'src/app/models/ingredientes-interface';
import { Productos } from 'src/app/models/productos.model';
import { Recetas } from 'src/app/models/recetas.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-recetas',
  templateUrl: './crear-recetas.component.html',
  styleUrls: ['./crear-recetas.component.css'],
})
export class CrearRecetasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formularioValido: boolean = false;
  mostrarAddIng: boolean = false;
  listadoIngredientes: Ingredientes[] = [];
  listadoProductos: Productos[]=[];
  propiedadesTotales:Totales;

  addIngrediente(newItem: Ingredientes) {
    /*Agrega el ingrediente con las cantidad*/
    const productoFiltro: string = newItem.producto;
    console.log(productoFiltro);
    this.listadoIngredientes.push(newItem);
  }

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    /**Lleno el array con los productos del servicio */
    this._productoService.obternerProductos().subscribe((data) => {
      let producto: any;

      data.forEach((p: any) => {
        producto = {
          nombre: p.payload.doc.data().nombre,
          calorias: p.payload.doc.data().calorias,
          proteinas: p.payload.doc.data().proteinas,
          grasas: p.payload.doc.data().grasas,
          hidratos: p.payload.doc.data().hidratos,
        };

        this.listadoProductos.push(producto);
      });
      //console.log(this.listadoProductos);
    });

    /*Creo el formulario*/
    this.crearForm();
  }

  crearReceta() {
    if (this.form.valid) {
      this.formularioValido = true;
    } else {
      this.formularioValido = false;
    }
  }

  crearForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
    });
  }

  mostrarAddIngrediente(f: any) {
    /*this.mostrarAddIng = true;
    if(this.formularioValido && this.mostrarAddIng){

    }*/
    //console.log(f);
  }

  guardarReceta() {
    let receta: Recetas;

    let nombreReceta: string = this.form.value.nombre;

    receta = {
      nombre: nombreReceta,
      ingredientes: [...this.listadoIngredientes],
    };

    /*Hacer los calculos de los totales*/

    this._productoService.guardarReceta(receta).then(()=>{
      console.log("GUARDADO OK");
    },error=>{
      console.log("GUADADO KO");
    })
    
  }
}
