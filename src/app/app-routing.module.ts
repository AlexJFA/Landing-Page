import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  // {path:"nosotros", component:NosotrosComponent},
  // {path:"proyectos", component:ProyectosComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
