import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'

// Personal Services
import {MarcasService} from './services/marcas.service';

// Personal Components
import { MarcaComponent } from './marca/marca.component'

@NgModule({
  declarations: [
  AppComponent,
  MarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
