import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/models/productos.model';

@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});  
  private producto: Productos = new Productos;

  value = 'Borrar';
  constructor() {
    
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

}
