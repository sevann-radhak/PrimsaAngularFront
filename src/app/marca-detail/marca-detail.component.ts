import { Component, OnInit, Input } from '@angular/core';

// Services
import {MarcasService} from './../services/marcas.service'

@Component({
  selector: 'app-marca-detail',
  templateUrl: './marca-detail.component.html',
  styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit {

  @Input() marca: any;


  // Constructor
  // constructor(private marcasService: MarcasService){
  //   this.getMarca();
  // }

  // Object definition
  // marca: any = {
  //   ID: 0,
  //   Codigo: '',
  //   Nombre: ''
  // };
  ngOnInit() {
  }

  // // Get all marcas
  // getMarca():void{
  //   this.marcasService.getMarcas().subscribe(result => {
  //     this.marcas = result;
  //   },
  //   error =>{
  //     console.log(JSON.stringify(error));
      
  //   });

}
