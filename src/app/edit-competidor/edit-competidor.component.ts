import { Component, OnInit } from '@angular/core';

// Router
import { ActivatedRoute, Router } from '@angular/router';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { CompetidoresService } from './../services/competidores.service';
import { MarcasService } from '../services/marcas.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-edit-competidor',
  templateUrl: './edit-competidor.component.html',
  styleUrls: ['./edit-competidor.component.css']
})
export class EditCompetidorComponent implements OnInit {
  // Form
  onEditCompetidorForm: FormGroup

  // Constructor
  constructor(
    private competidoresService: CompetidoresService,
    private marcasService: MarcasService,
    private zonasService: ZonasService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder) {
    this.getMarcas();
    this.getZonas();
    this.OnEditCompetidorForm(),
      this.getCompetidor(this._route.snapshot.paramMap.get('id'));
  }

  marcas: any;
  zonas: any;
  competidor: any;

  // Create the form to add a new Competidor
  OnEditCompetidorForm(): void {
    this.onEditCompetidorForm = this._formBuilder.group({
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
  // Get current competidor
  getCompetidor(id: any): void {
    this.competidoresService.getCompetidor(id).subscribe(result => {
      this.competidor = result;
    },
      error => {
        console.log(JSON.stringify(error));
        this._router.navigate([`competidores`]);
      });
  }

  // PUT: Update a Competidor
  putCompetidor(values: any): void {
    values.CompetidorID = this.competidor.CompetidorID;
    if (values.Codigo == '') {
      values.Codigo = this.competidor.Codigo;
    }
    if (values.Nombre == '') {
      values.Nombre = this.competidor.Nombre;
    }
    if (values.Calle == '') {
      values.Calle = this.competidor.Calle;
    }
    if (values.Latitud == '') {
      values.Latitud = this.competidor.Latitud;
    }
    if (values.Longitud == '') {
      values.Longitud = this.competidor.Longitud;
    }
    if (values.MarcaID == '') {
      values.MarcaID = this.competidor.MarcaID;
    }
    if (values.ZonaID == '') {
      values.ZonaID = this.competidor.ZonaID;
    }
    if (values.Marcador == '') {
      values.Marcador = this.competidor.Marcador;
    }
    if (values.Observar == '') {
      values.Observar = this.competidor.Observar;
    }
console.log(values);
    this.competidoresService.putCompetidor(this._route.snapshot.paramMap.get('id'), values).subscribe(result => {
      this.onEditCompetidorForm.reset();
      this._router.navigate(['/competidores']);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  ngOnInit() {
  }

}
