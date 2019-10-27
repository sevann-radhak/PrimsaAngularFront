import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { CompetidoresService } from './../services/competidores.service';
import { MarcasService } from '../services/marcas.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-add-competidor',
  templateUrl: './add-competidor.component.html',
  styleUrls: ['./add-competidor.component.css']
})

export class AddCompetidorComponent implements OnInit {

  // Form
  onCreateCompetidorForm: FormGroup

  // Constructor
  constructor(
    private competidoresService: CompetidoresService,
    private marcasService: MarcasService,
    private zonasService: ZonasService,
    private router: Router,
    private _formBuilder: FormBuilder) {
    this.getMarcas();
    this.getZonas();
    this.OnCreateCompetidorForm();
  }

  marcas: any;
  zonas: any;

  ngOnInit() {
  }

  // Create the form to add a new Competidor
  OnCreateCompetidorForm(): void {
    console.log('pasando por OnCreateMarcaForm');

    this.onCreateCompetidorForm = this._formBuilder.group({
      Codigo: ['', Validators.required],
      Nombre: ['', Validators.required],
      Calle: ['', Validators.required],
      Latitud: ['', Validators.required],
      Longitud: ['', Validators.required],
      Marcador: [''],
      Observar: [''],
      MarcaID: ['', Validators.required],
      ZonaID: ['', Validators.required],
    });
  }


  // Crud methods
  // Get all marcas
  getMarcas(): void {
    this.marcasService.getMarcas().subscribe(result => {
      this.marcas = result;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  // Get all zonas
  getZonas(): void {
    this.zonasService.getZonas().subscribe(result => {
      this.zonas = result;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  // POST: Add a new Competidor
  postCompetidor(values: any): void {
    if(values.Marcador == ''){
      values.Marcador = false;
    }
    if(values.Observar == ''){
      values.Observar = false;
    }
    console.log(values);
    
    this.competidoresService.postCompetidor(values).subscribe(result => {
      this.onCreateCompetidorForm.reset();
      this.router.navigate(['/competidores']);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}
