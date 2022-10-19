import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaInformeComponent} from "./informe/lista-informe/lista-informe.component";
import {DetalleInformeComponent} from "./informe/detalle-informe/detalle-informe.component";
import {NuevoInformeComponent} from "./informe/nuevo-informe/nuevo-informe.component";
import {EditarInformeComponent} from "./informe/editar-informe/editar-informe.component";
import {HomepageComponent} from "./layout/homepage.component";
import {FirmarInformeComponent} from "./informe/firmar-informe/firmar-informe.component";
import {ListaUsuarioComponent} from "./usuario/lista-usuario/lista-usuario.component";
import {DetalleUsuarioComponent} from "./usuario/detalle-usuario/detalle-usuario.component";
import {EditarUsuarioComponent} from "./usuario/editar-usuario/editar-usuario.component";

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'informe', component: ListaInformeComponent},
  {path:'informe/:id', component: DetalleInformeComponent},
  {path:'crear/informe', component: NuevoInformeComponent},
  {path:'informe/:id/editar', component: EditarInformeComponent},
  {path:'informe/:id/firmar', component: FirmarInformeComponent},
  {path:'usuario', component: ListaUsuarioComponent},
  {path:'usuario/:id', component: DetalleUsuarioComponent},
  {path:'usuario/:id/editar', component: EditarUsuarioComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
