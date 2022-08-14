import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { ContactoComponent } from './rutas/contacto/contacto.component';
import { NoticiasComponent } from './rutas/noticias/noticias.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },{
    path: 'contacto',
    component: ContactoComponent
  },{
    path: 'noticias',
    component: NoticiasComponent
  },
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
