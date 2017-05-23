import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{APP_ROUTING} from './app.routes';




import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SliderHomeComponent } from './componentes/slider-home/slider-home.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';
import { PasosComponent } from './componentes/pasos/pasos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderHomeComponent,
    PrestamosComponent,
    PasosComponent,
    FooterComponent,
    HomeComponent,
    ComoFuncionaComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
