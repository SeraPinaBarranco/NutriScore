import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredientes } from 'src/app/models/ingredientes-interface';
import { Recetas } from 'src/app/models/recetas.model';

@Component({
  selector: 'app-crear-recetas',
  templateUrl: './crear-recetas.component.html',
  styleUrls: ['./crear-recetas.component.css'],
})
export class CrearRecetasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formularioValido: boolean = false;
  mostrarAddIng: boolean = false;
  listadoIngredientes:Ingredientes[] = [];

  addIngrediente(newItem: Ingredientes) {
    this.listadoIngredientes.push(newItem);

  }
  constructor() {}

  ngOnInit(): void {
    this.crearForm();
  }

  crearReceta() {
    if(this.form.valid){
      this.formularioValido= true;
    }else{
      this.formularioValido= false
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

  mostrarAddIngrediente(f:any){
    /*this.mostrarAddIng = true;
    if(this.formularioValido && this.mostrarAddIng){

    }*/
    //console.log(f);
  }

  guardarReceta(){
    let receta:Recetas;

    let nombreReceta:string= this.form.value.nombre;

    receta={
      nombre: nombreReceta,
      ingredientes: [
        ...this.listadoIngredientes
      ]
    }
    //console.log(receta);
  }
}
