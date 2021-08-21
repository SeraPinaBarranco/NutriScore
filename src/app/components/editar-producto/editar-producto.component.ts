import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id:string|null;
  subs:any;
  producto: Productos;
  myForm: FormGroup= new FormGroup({
    nombre: new FormControl(null),
    calorias:new FormControl(0),
    proteinas: new FormControl(0),
    grasas:new FormControl(0),
    hidratos:new FormControl(0),
    azucares: new FormControl(0)
  });

  constructor(private _productoService: ProductoService, private ar: ActivatedRoute, private router:Router) {
    this.id ="";
    this.id= this.ar.snapshot.paramMap.get('slug');

    if(this.id != null){
      this.subs =this._productoService.getProductoEdit(this.id).subscribe(data =>{

        this.myForm= new FormGroup({
          nombre: new FormControl(data.payload.data()['nombre'],[Validators.required, Validators.maxLength(15)]),
          calorias: new FormControl(data.payload.data()['calorias'],[Validators.required]),
          proteinas: new FormControl(data.payload.data()['proteinas'],[Validators.required]),
          grasas: new FormControl(data.payload.data()['grasas'],[Validators.required]),
          hidratos: new FormControl(data.payload.data()['hidratos'],[Validators.required]),
          azucares:  new FormControl(data.payload.data()['azucares'],[Validators.required])
        })

      });
    }

  }

  ngOnInit(): void {
    //this.obternerId();
  }

  editarRegistro(){

    const PROD :Productos ={
      nombre:this.myForm.value['nombre'],
      calorias:this.myForm.value['calorias'],
      proteinas:this.myForm.value['proteinas'],
      grasas:this.myForm.value['grasas'],
      hidratos:this.myForm.value['hidratos'],
      azucares:this.myForm.value['azucares']

    }
    this._productoService.editProducto(<string>this.id,PROD)
    .then(()=>{
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Información de Registro',
        text:`Producto -${PROD.nombre.toUpperCase()}- editado con exito!!!`,
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/listar-productos']);
    })
    .catch((err)=>{
      console.log(err);
    })
  }





}
