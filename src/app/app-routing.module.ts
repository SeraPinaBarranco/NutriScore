import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductoComponent } from './components/add-edit-producto/add-edit-producto.component';

const routes: Routes = [  
  {path:'add', component: AddEditProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
