import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CargaLocalesComponent } from './pages/carga-locales/carga-locales.component';
import { CargaProductosComponent } from './pages/carga-productos/carga-productos.component';


const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
  path:'registro', component:RegistroComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'cargalocales', component:CargaLocalesComponent
  },
  {
    path:'cargaproductos', component:CargaProductosComponent
  }
,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
