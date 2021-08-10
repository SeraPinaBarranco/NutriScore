import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductoComponent } from './components/add-edit-producto/add-edit-producto.component';
import { CrearRecetaComponent } from './components/crear-receta/crear-receta.component';
import { AgregarIngredienteComponent } from './components/crear-recetas/agregar-ingrediente/agregar-ingrediente.component';
import { CrearRecetasComponent } from './components/crear-recetas/crear-recetas.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/listar-productos', pathMatch: 'full' },
  {path:'add', component: AddEditProductoComponent},
  {path:'listar-productos', component: ListarProductosComponent},
  {path:'crear-receta', component: CrearRecetaComponent},
  {path:'crear-recetas', component: CrearRecetasComponent},
    {path:'add-ingrediente', component: AgregarIngredienteComponent},
  {path:'edit/:slug', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
