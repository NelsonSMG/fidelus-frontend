import { Routes, RouterModule } from "@angular/router";
import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

//pages
const appRoutes: Routes = [
    {path:'**', component: NoPageFoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:false })