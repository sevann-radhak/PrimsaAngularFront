import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { Router } from '@angular/router';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Clases
import { Zona } from './Zona';

// Services
import { ZonasService } from './../services/zonas.service';
import { ZonaComponent } from './zona/zona.component';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  // Form
  onCreateZoneForm: FormGroup

  // Constructor
  constructor(
    private dialog: MatDialog,
    private zonasService: ZonasService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.getZonas();
    this.OnCreateZoneForm();
  }

  // Object definitions
  zona: Zona = new Zona();
  zonas: any;

  ngOnInit() {
  }

  // Create the form to add a new Zone
  OnCreateZoneForm(): void {
    console.log('pasando por OnCreateZoneForm');
    
    this.onCreateZoneForm = this._formBuilder.group({
      Codigo: ['', Validators.required],
      Name: ['', Validators.required]
    });
  }

  // POST: Add a new Zone
  postZone(values: any) {    
    this.zonasService.postZona(values).subscribe(result => {
      this.onCreateZoneForm.reset();
      this.getZonas();
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  // onCreate() {
  //   // this.zonasService.initializeFormGroup();

  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '60%';

  //   this.dialog.open(ZonaComponent, dialogConfig);
  // }

  // Crud methods
  // Get all zonas
  getZonas(): void {
    this.zonasService.getZonas().subscribe(result => {
      this.zonas = result;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  // Select a single Zona
  getZona(zona: Zona): void {
    this.router.navigate([`/zonas/${zona.ZonaID}`]);
  }

  // addZonaForm(): void {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '60%';

  //   this.dialog.open(ZonaComponent, dialogConfig);
  // }

  // postZona(): void {
  //   console.log(this.zona);
  //   // this.marcasService.postMarca(this.newMarca).subscribe(result => {
  //   //   this.getMarcas();
  //   // },
  //   //   error => {
  //   //     console.log(JSON.stringify(error));

  //   //   });
  // }
}
