import { Component, OnInit } from '@angular/core';

// Services
import {MarcasService} from './../services/marcas.service'

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  // Constructor
  constructor(private marcasService: MarcasService){
    this.getMarcas();
  }

  // Object definitions
  newMarca: any = {
    Codigo: '',
    Nombre: ''
  };
  marcas: any;


  ngOnInit() {
  }

  // Crud methods
  // Add a new competidor
  getMarcas():void{
    this.marcasService.getMarcas().subscribe(result => {
      this.marcas = result;
    },
    error =>{
      console.log(JSON.stringify(error));
      
    });
    // this.competidores.push(this.model);
    // this.msg = 'Registro almacenado exitosamente';
  }

  postMarca():void {
    console.log(this.newMarca);
    this.marcasService.postMarca(this.newMarca).subscribe(result => {
      this.getMarcas();
    },
    error =>{
      console.log(JSON.stringify(error));
      
    });
  }
  
  // Delete a competidor
  deleteMarca(id: string):void{
    this.marcasService.deleteMarca(id).subscribe(result => {
      this.getMarcas();
    },
    error => {
      console.log(error);
    });
    
    // var answer = confirm('¿Estás seguro de eliminar el registro?');
    
    // if(answer){
    //   this.competidores.splice(i, 1);
    //   this.msg = 'Registro eliminado exitosamente';
    // }
  }
  
  // Edit a competidor
  // myValue;
  // editCompetidor(i):void{
  //   this.hideUpdate = false;

  //   this.modelToUpdate.name = this.competidores[i].name;
  //   this.modelToUpdate.position = this.competidores[i].position;
  //   this.modelToUpdate.email = this.competidores[i].email;

  //   this.myValue = i;
  // }
  
  // // Update a competidor
  // updateCompetidor():void{
  //   let i = this.myValue;

  //   this.competidores[i] = this.modelToUpdate;
  //   this.modelToUpdate = {};
  //   this.msg = 'Registro actualizado exitosamente';
  // }

}
