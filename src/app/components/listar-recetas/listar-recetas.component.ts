import { Component, OnInit } from '@angular/core';
import { IngredientesInterface } from 'src/app/models/ingredientes-interface';
import { Recetas } from 'src/app/models/recetas.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {
  listadoRecetas: Recetas[] = [];

  constructor(private _listarRecetas: ProductoService) { }

  ngOnInit(): void {
    let receta:Recetas;
    this._listarRecetas.obtenerRecetas().subscribe(recetas => {
      recetas.forEach((res:any) =>{
        receta= {
           nombre: res.payload.doc.data().nombre,
            ingredientes:[res.payload.doc.data().ingredientes],
            totales:[res.payload.doc.data().totales]
        }
        this.listadoRecetas.push(receta);
      });
      console.log(this.listadoRecetas);
      
    });
  }



}
