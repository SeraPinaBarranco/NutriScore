import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  private producto: Productos[] = [];

  value = 'Borrar';
  constructor(private _productoService: ProductoService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.myForm= new FormGroup({
      nombre: new FormControl("",[Validators.required, Validators.maxLength(15)]),
      calorias: new FormControl("",[Validators.required]),
      proteinas: new FormControl("",[Validators.required]),
      grasas: new FormControl("",[Validators.required]),
      hidratos: new FormControl("",[Validators.required])

    });
  }

  submit(){
    datos:
    console.log(this.myForm.controls);
  }

  resetearForm(){
    this.createForm();
  }

  /*obtenerProductos(){
    this._productoService.obternerProductos().subscribe(prod => {
      //console.log(prod);
      prod.forEach((p:any) => {
          console.log(p.payload.doc.id);
      })
    })
  }*/

  guardarProducto(){
    const PROD: Productos={
      nombre: this.myForm.value.nombre,
      calorias:this.myForm.value.calorias,
      proteinas: this.myForm.value.proteinas,
      grasas:this.myForm.value.grasas,
      hidratos:this.myForm.value.hidratos
    }

    this._productoService.guardarProducto(PROD).then(()=>{
      alert("Guardada");
    },error=>{
      console.log(error);
    })

  }
}
