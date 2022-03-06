import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';// enlace componente admin
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { InitComponent } from './component/init/init.component';// enlace componente init
import { TablapartidoComponent } from './component/tablapartido/tablapartido.component';
import { AmdTablapartidoComponent } from './component/amd-tablapartido/amd-tablapartido.component';

const routes: Routes = [

{
path: 'admin', component: AdminComponent,
children: [
  {path:'contactos', component: AmdContactComponent}, // se une con admin component en html ['/admin/contactos']
  {path:'estadistica', component: TablapartidoComponent},
  {path:'tabla', component: AmdTablapartidoComponent}

]
},

{ path: 'inicio', component: InitComponent }, //se llama componente http://localhost:4200/inicio siempre inicie en inicio

/*{  path:'formulario', component:FormularioComponent,
  children:[
    {path:'listado', component: ListadoComponent,
  }
  ]
}
  { path: 'login', component: LoginComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'upload', component: UploadComponent },
*/
{ // se hace peticion para que inicie siempre del componente init asi se coloque otra cosa
  path: '**',
  redirectTo: 'inicio'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
