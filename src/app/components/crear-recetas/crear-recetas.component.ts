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
  propiedadesTotales:Totales[]=[];

  addIngrediente(newItem: Ingredientes) {
    /*Agrega el ingrediente con las cantidad*/
    const productoNFiltro: string = newItem.producto;
    const cantidadFiltro: number = newItem.cantidad;
    
    //console.log(cantidadFiltro);
    this.listadoIngredientes.push(newItem);

    this.calcularTotalPropiedades(productoNFiltro,cantidadFiltro);
  }

  calcularTotalPropiedades(p:string, n:number){
    const productoFilter = this.listadoProductos.filter((data) => data.nombre === p);//obtengo el producto seleccionado
    
    this.propiedadesTotales.push({
      producto:p,
      totalCalorias:  productoFilter[0].calorias * n ,
      totalProteinas: productoFilter[0].proteinas * n,
      totalGrasas:    productoFilter[0].grasas * n,
      totalHidratos:  productoFilter[0].hidratos * n
    });

    console.log(this.propiedadesTotales);
    //llenar el array de Totales

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
      totales: [...this.propiedadesTotales]
    };

    /*Hacer los calculos de los totales*/

    this._productoService.guardarReceta(receta).then(()=>{
      console.log("GUARDADO OK");
    },error=>{
      console.log("GUADADO KO");
    })
    
  }
}
