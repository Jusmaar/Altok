import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SliderHomeComponent } from './componentes/slider-home/slider-home.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';
import { PasosComponent } from './componentes/pasos/pasos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderHomeComponent,
    PrestamosComponent,
    PasosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
