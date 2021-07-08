import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  product: Productos;
  listaProductos: Productos[] = [];

  columnas: string[] = [
    'nombre',
    'calorias',
    'proteinas',
    'grasas',
    'hidratos'
    //'id',
  ];
  //dataSource = new MatTableDataSource();

  //dataSource= ELEMENT_DATA;

  //dataSource= new MatTableDataSource<Productos>();
  public dataSource: any[] = [];
  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.llenarArrayProductos();
  }

  llenarArrayProductos() {
    let s = 0;
    //Trae todos los registros del Service
    this._productoService.obternerProductos().subscribe((res) => {
      res.forEach((p: any) => {
        this.product = {
          nombre: p.payload.doc.data().nombre,

          calorias: p.payload.doc.data().calorias,
          proteinas: p.payload.doc.data().proteinas,
          grasas: p.payload.doc.data().grasas,
          hidratos: p.payload.doc.data().hidratos,
          id: p.payload.doc.id,
        };
        this.listaProductos.push(this.product);
      });

      this.dataSource = this.listaProductos;
    });
    
  }
}

/*export interface Prod {
  nombre: string;
  calorias: number;
  proteinas: number;
  grasas: number;
  hidratos: number;
  id: string;
}

const ELEMENT_DATA: Prod[] = [
  {
    nombre: 'ww',
    calorias: 2,
    proteinas: 23,
    grasas: 44,
    hidratos: 63,
    id: 'w23ddw',
  },
  {
    nombre: 'sw',
    calorias: 1,
    proteinas: 223,
    grasas: 74,
    hidratos: 6,
    id: 'ertrdg',
  },
  {
    nombre: 'ttw',
    calorias: 12,
    proteinas: 2223,
    grasas: 94,
    hidratos: 16,
    id: 'gnvnv',
  },
];*/
