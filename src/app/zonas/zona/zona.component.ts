import { Component, OnInit, Input } from '@angular/core';

// import { Router } from '@angular/router';

// Services
import { ZonasService } from './../../services/zonas.service';
import { ZonasComponent } from '../zonas.component';

@Component({
  selector: 'app-zona',
  templateUrl: './zona.component.html',
  styleUrls: ['./zona.component.css']
})
export class ZonaComponent implements OnInit {
  isHidden: boolean = true;

  @Input() zona: object;

  constructor(private zonaService: ZonasService, private zonasComponent: ZonasComponent) { 
  }

  ngOnInit() {
    console.log(this.isHidden);
  }

prueba(){
  console.log('prueba');
  
}

  // DELETE
  deleteZona(id: any): void {
    var answer = confirm('¿Estás seguro de eliminar el registro?');

    if (answer) {
      this.zonaService.deleteZona(id).subscribe(result => {
        this.zonasComponent.getZonas();
        console.log(result);
      },
        error => {
          console.log(error);
        });
    }


  }
}
