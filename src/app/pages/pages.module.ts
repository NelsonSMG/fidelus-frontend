import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { SharedModule } from '../shared/shared.module';

//rutas
import { PAGES_ROUTES } from './pages.routes';

//componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ReglasComponent } from './reglas/reglas.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ClientesComponent,
    ConceptosComponent,
    ReglasComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ]
})
export class PagesModule { }
