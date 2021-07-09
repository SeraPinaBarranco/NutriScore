import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductoService } from 'src/app/services/producto.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css'],
})
export class ListarProductosComponent implements OnInit {
  product: Productos;
  listaProductos: Productos[] = [];
  mostrarSpinner = false;

  columnas: string[] = [
    'nombre',
    'calorias',
    'proteinas',
    'grasas',
    'hidratos',
    'acciones'
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

    this.listaProductos= [];
    this.dataSource = [];

    //Trae todos los registros del Service
    this._productoService.obternerProductos().subscribe((res) => {

      this.mostrarSpinner = true;

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
        setTimeout(() => {
          this.mostrarSpinner=false;

        }, 1100);
      });

      this.dataSource = this.listaProductos;
    });
    this.mostrarSpinner= true
  }

  eliminarProducto(id:string){
    this._productoService.eliminarProducto(id).then( res=>{
      this.llenarArrayProductos();

      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Información de Registro',
        text:`Producto eliminado con exito!!!`,
        showConfirmButton: false,
        timer: 1500
      });
           
    },error=>{
      console.log(error);
      //this.toastr.error("Error al eliminar la tarjeta",error);
    })
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
