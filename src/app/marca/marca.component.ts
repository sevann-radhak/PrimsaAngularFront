import { Component, OnInit } from '@angular/core';

// Services
import {MarcasService} from './../services/marcas.service'

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  // Services and other things
  marcas: any;
  constructor(private marcasService: MarcasService){
    // console.log(JSON.stringify(marcasService.marcas.rows));
    this.marcas = marcasService.marcas.rows;
  }

  ngOnInit() {
  }

}
