import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductoComponent } from './components/add-edit-producto/add-edit-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [  
  {path:'add', component: AddEditProductoComponent},
  {path:'listar-productos', component: ListarProductosComponent},
  {path:'edit/:slug', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
