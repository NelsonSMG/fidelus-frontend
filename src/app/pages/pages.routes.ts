import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

//pages
const pagesRoutes: Routes = [
    {
        path:'',
        component: PagesComponent,
        children: [
            {path:'home', component: DashboardComponent, data: {titulo: 'Home', grupo: 'Home'}},
            {path:'', redirectTo: '/home', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)