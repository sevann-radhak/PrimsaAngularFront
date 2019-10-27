import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcaComponent } from './marca/marca.component';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { ZonasComponent } from './zonas/zonas.component';
import { AddCompetidorComponent } from './add-competidor/add-competidor.component';
import { EditCompetidorComponent } from './edit-competidor/edit-competidor.component';


const routes: Routes = [
  { path: '', component: CompetidoresComponent },
  { path: 'competidores', component: CompetidoresComponent },
  { path: 'add-competidor', component: AddCompetidorComponent },
  { path: 'edit-competidor/:id', component: EditCompetidorComponent },

  { path: 'marcas', component: MarcaComponent },
  // { path: 'marcas/:id', component: MarcaDetailComponent },

  { path: 'zonas', component: ZonasComponent },
  {path: '**', component: CompetidoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
