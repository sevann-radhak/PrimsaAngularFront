import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { MarcasService } from './services/marcas.service';

import { MarcaComponent } from './marca/marca.component';
import { HomeComponent } from './home/home.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { ZonasComponent } from './zonas/zonas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ZonaComponent } from './zonas/zona/zona.component';

import { MaterialModule } from './material/material.module';
import { ZonasService } from './services/zonas.service';
import * as Material from '@angular/material';
import { AddCompetidorComponent } from './add-competidor/add-competidor.component';
import { EditCompetidorComponent } from './edit-competidor/edit-competidor.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    HomeComponent,
    MarcaDetailComponent,
    CompetidoresComponent,
    ZonasComponent,
    ZonaComponent,
    AddCompetidorComponent,
    EditCompetidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    Material.MatGridListModule,
    Material.MatToolbarModule,
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents: [ZonasComponent, ZonaComponent],
  providers: [MarcasService, ZonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
