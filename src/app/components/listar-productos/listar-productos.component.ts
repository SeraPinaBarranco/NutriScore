import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  miFiltro='';
  pagina= 0;

  columnas: string[] = [
    'nombre',
    'calorias',
    'proteinas',
    'grasas',
    'hidratos',
    'azucares',
    'acciones'
    //'id',
  ];
  //dataSource = new MatTableDataSource();

  //dataSource= ELEMENT_DATA;

  //dataSource= new MatTableDataSource<Productos>();
  public dataSource: any[] = [];
  constructor(private _productoService: ProductoService, private router : Router) {}

  ngOnInit(): void {
    this.llenarArrayProductos();
  }

  llenarArrayProductos() {
    let s = 0;



    //Trae todos los registros del Service
    this._productoService.obternerProductos().subscribe((res) => {
      this.listaProductos= [];
      this.dataSource = [];
      this.mostrarSpinner = true;

      res.forEach((p: any) => {
        this.product = {
          nombre: p.payload.doc.data().nombre,

          calorias: p.payload.doc.data().calorias,
          proteinas: p.payload.doc.data().proteinas,
          grasas: p.payload.doc.data().grasas,
          hidratos: p.payload.doc.data().hidratos,
          azucares: p.payload.doc.data().azucares,
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

  eliminarProducto(id:string|undefined){
    if(id){
      this._productoService.eliminarProducto(id).then( res=>{
        this.llenarArrayProductos();
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Información de Registro',
          text:`Producto eliminado con exito!!!`,
          showConfirmButton: false,
          timer: 1500 });


      },error=>{
        console.log(error);
        //this.toastr.error("Error al eliminar la tarjeta",error);
      });
    }
  }

  addProductoEdit(objeto:Productos){
    if(objeto.id != null){
      this._productoService.addProductoEdit(objeto);
      this.router.navigate(['/add']);
    }
  }

  paginaMas(){
    this.pagina += 3;
  }

  paginaMenos(){
    if(this.pagina != 0)this.pagina -= 3;
  }

  teclearFiltro(){
    this.pagina=0;
  }

}

