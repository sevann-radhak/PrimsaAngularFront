import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { MarcasService } from './../services/marcas.service'

@Component({
  selector: 'marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})

export class MarcaComponent implements OnInit {

  // Form
  onCreateMarcaForm: FormGroup

  // Constructor
  constructor(
    private marcasService: MarcasService,
    private _formBuilder: FormBuilder,
    private router: Router) {
    this.getMarcas();
    this.OnCreateMarcaForm();
  }

  // Object definitions
  // newMarca: any = {
  //   Codigo: '',
  //   Nombre: ''
  // };
  marcas: any;


  ngOnInit() {
  }

  // Create the form to add a new Zone
  OnCreateMarcaForm(): void {
    console.log('pasando por OnCreateMarcaForm');

    this.onCreateMarcaForm = this._formBuilder.group({
      Codigo: ['', Validators.required],
      Nombre: ['', Validators.required]
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
    // this.competidores.push(this.model);
    // this.msg = 'Registro almacenado exitosamente';
  }

  // Select a single marca
  getMarca(marca: any): void {
    this.router.navigate([`/marcas/${marca.MarcaID}`, marca]);
  }

  // POST: Add a new marca
  postMarca(values: any): void {
    console.log(values);
    this.marcasService.postMarca(values).subscribe(result => {
      this.onCreateMarcaForm.reset();
      this.getMarcas();
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  // DELETE: Delete a marca
  deleteMarca(id: string): void {
    this.marcasService.deleteMarca(id).subscribe(result => {
      this.getMarcas();
    },
      error => {
        console.log(error);
      });
  }
}
