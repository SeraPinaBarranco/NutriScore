import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Productos } from 'src/app/models/productos.model';
import { Recetas } from 'src/app/models/recetas.model'
import { ProductoService } from 'src/app/services/producto.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css']
})
export class CrearRecetaComponent implements OnInit{
  myForm: FormGroup=new FormGroup({});
  productos: Productos[] = [];


  constructor(private _productoService: ProductoService) {


    this._productoService.obternerProductos().subscribe(res =>{
      let prod:any;
      res.forEach((p:any)=>{

        prod= {
          nombre:p.payload.doc.data().nombre,
          calorias:p.payload.doc.data().calorias,
          proteinas:p.payload.doc.data().proteinas,
          grasas:p.payload.doc.data().grasas,
          hidratos:p.payload.doc.data().hidratos,
          azucares:p.payload.doc.data().azucares
        }

        this.productos.push(prod);
      });
    });
    //console.log(this.productos);
  }

  ngOnInit(): void {
    this.crearFormulario();
  }
  crearFormulario(){
    this.myForm= new FormGroup({
      nombre: new FormControl("",[Validators.required, Validators.maxLength(15)])

    });
  }

  crearReceta(){
    const RECETA= {
      nombre: this.myForm.controls.nombre.value,
        // ingredientes:[{
        //   producto:'macarrones',
        //   cantidad:12
        // },{
        //   producto:'garbanzos',
        //   cantidad: 23
        // }]

      }

      console.log(this.myForm);

    this._productoService.guardarReceta(RECETA).then(()=>{
       swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Información de Registro',
        text:`Producto - ${RECETA.nombre} - guardado con exito!!!`,
        showConfirmButton: false,
        timer: 2000
      })
    });
  }
}

