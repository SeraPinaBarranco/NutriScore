import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { AngularMaterialModule } from './components/shared/angular-material/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditProductoComponent } from './components/add-edit-producto/add-edit-producto.component';
import { FormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { CrearRecetaComponent } from './components/crear-receta/crear-receta.component';
import { CrearRecetasComponent } from './components/crear-recetas/crear-recetas.component';
import { AgregarIngredienteComponent } from './components/crear-recetas/agregar-ingrediente/agregar-ingrediente.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditProductoComponent,
    ListarProductosComponent,
    SpinnerComponent,
    EditarProductoComponent,
    CrearRecetaComponent,
    CrearRecetasComponent,
    AgregarIngredienteComponent,
    FooterComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
