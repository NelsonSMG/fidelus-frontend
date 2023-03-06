import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { ClientesComponent } from './clientes/clientes.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ReglasComponent } from './reglas/reglas.component';

//pages
const pagesRoutes: Routes = [
    {
        path:'',
        component: PagesComponent,
        children: [
            {path:'home', component: DashboardComponent, data: {titulo: 'Home', grupo: 'Home'}},
            {path:'clientes', component: ClientesComponent, data: {titulo: 'Clientes', grupo: 'Administracion'}},
            {path:'conceptos', component: ConceptosComponent, data: {titulo: 'Conceptos', grupo: 'Administracion'}},
            {path:'reglas', component: ReglasComponent, data: {titulo: 'Reglas', grupo: 'Administracion'}},
            {path:'', redirectTo: '/home', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)