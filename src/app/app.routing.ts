import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';




const app_routes: Routes = [
  {path: '', component: InicioComponent,  pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'contacto', component: ContactoComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
