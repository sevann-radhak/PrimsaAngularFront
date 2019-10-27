import { Component, OnInit } from '@angular/core';

// Services
import { CompetidoresService } from './../services/competidores.service';


// import { MarcasService } from '../services/marcas.service';
// import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.css']
})
export class CompetidoresComponent implements OnInit {

  // Constructor
  constructor(
    private competidoresService: CompetidoresService
    ) {
    this.getCompetidores();
  }

  competidores: any;

  ngOnInit() {
  }

  // GET: Get all competidores
  getCompetidores(): void {
    this.competidoresService.getCompetidores().subscribe(result => {
      this.competidores = result;
    },
      error => {
        console.log(JSON.stringify(error));

      });
  }

  // DELETE: Delete a competidor
  deleteCompetidor(id: string): void {
    this.competidoresService.deleteCompetidor(id).subscribe(result => {
      this.getCompetidores();
    },
      error => {
        console.log(error);
      });
  }

}
