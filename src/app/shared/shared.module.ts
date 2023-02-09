import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    NoPageFoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    NoPageFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
