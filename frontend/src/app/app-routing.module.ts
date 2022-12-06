import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { GaleriaComponent} from './galeria/galeria.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'
import { ContactoComponent} from './contacto/contacto.component';
import { CondicionesComponent } from './condiciones/condiciones.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'condiciones', component: CondicionesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
