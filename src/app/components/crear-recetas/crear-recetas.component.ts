import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-recetas',
  templateUrl: './crear-recetas.component.html',
  styleUrls: ['./crear-recetas.component.css'],
})
export class CrearRecetasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formularioValido: boolean = false;
  mostrarAddIng: boolean = false;

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

  mostrarAddIngrediente(){
    this.mostrarAddIng = true;
    if(this.formularioValido && this.mostrarAddIng){
      
    }
  }
}
