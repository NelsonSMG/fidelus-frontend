import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
