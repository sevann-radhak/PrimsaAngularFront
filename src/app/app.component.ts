import { Component } from '@angular/core';

// Services
// import {MarcasService} from './services/marcas.service'

// Components
// import {MarcaComponent} from './marca/marca.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Prisma HandsOn por: Sevann Radhak (oct-2019)';
  msg:string = '';

  // competidores = [
  //   {'name': 'Farzt', position: 'manager', email: 'email1@email.com'},
  //   {'name': 'Juan', position: 'developer', email: 'email2@email.com'},
  //   {'name': 'Pedro', position: 'product owner', email: 'email3@email.com'}
  // ];

  // // Model
  // model:any = {};
  // modelToUpdate:any = {};
  // hideUpdate:boolean = true;

  // // Crud methods
  // // Add a new competidor
  // addCompetidor():void{
  //   this.competidores.push(this.model);
  //   this.msg = 'Registro almacenado exitosamente';
  // }
  
  // // Delete a competidor
  // deleteCompetidor(i):void{
  //   var answer = confirm('¿Estás seguro de eliminar el registro?');
    
  //   if(answer){
  //     this.competidores.splice(i, 1);
  //     this.msg = 'Registro eliminado exitosamente';
  //   }
  // }
  
  // // Edit a competidor
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

  // Close alert 
  closeAlert():void{
    this.msg = '';
  }


  // Services and other things
  // marcas: any;
  // constructor(private marcasService: MarcasService){
  //   // console.log(JSON.stringify(marcasService.marcas.rows));
  //   this.marcas = marcasService.marcas.rows;
  // }
}
