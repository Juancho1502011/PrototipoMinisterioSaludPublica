import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AccbuttonComponent } from './componentes/accbutton/accbutton.component';
import { ContactoComponent } from './rutas/contacto/contacto.component';
import { NoticiasComponent } from './rutas/noticias/noticias.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    AccbuttonComponent,
    ContactoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
