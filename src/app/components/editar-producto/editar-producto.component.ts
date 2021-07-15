import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id:string;
  subs:any;

  constructor(private _productoService: ProductoService, private ar: ActivatedRoute) {
    this.id ="";
  }

  ngOnInit(): void {
    this.obternerId();
  }
  
  obternerId(){
    this.ar.params.subscribe(data =>{
      this.id = data.slug;
    });

    if(this.id != null){
      this.subs =this._productoService.getProductoEdit(this.id).subscribe(data =>{
        console.log(data.payload._delegate._document.data.value.mapValue.fields);//nombre del producto
        
        const PROD: Productos={
      
          nombre: data.payload._delegate._document.data.value.mapValue.fields.nombre.stringValue,
          calorias:data.payload._delegate._document.data.value.mapValue.fields.calorias.integerValue,
          proteinas: data.payload._delegate._document.data.value.mapValue.fields.proteinas.integerValue,
          grasas:data.payload._delegate._document.data.value.mapValue.fields.grasas.integerValue,
          hidratos:data.payload._delegate._document.data.value.mapValue.fields.hidratos.integerValue
        }
        
      });

    }
  }



}
