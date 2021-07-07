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

  displayedColumns: string[] = ['nombre'/*, 'calorias', 'proteinas', 'grasas','hidratos'*/];
  dataSource = new MatTableDataSource();

  
  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.llenarArrayProductos();
  }

  llenarArrayProductos() {
    //Trae todos los registros del Service
    this._productoService.obternerProductos().subscribe((res) => {
      res.forEach((p: any) => {
        this.product = new Productos(
          p.payload.doc.data().nombre,
          p.payload.doc.data().calorias,
          p.payload.doc.data().proteinas,
          p.payload.doc.data().grasas,
          p.payload.doc.data().hidratos,
          p.payload.doc.id
        );

        this.listaProductos.push(this.product);
      });
    });
    
    this.dataSource.data = this.listaProductos; 
    console.log(this.dataSource.data);
  }
}
