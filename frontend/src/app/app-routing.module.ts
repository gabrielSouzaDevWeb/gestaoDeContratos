import { CadastroPrestadorCreateComponent } from './components/cadastro/cadastro-prestador-create/cadastro-prestador-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContratosCrudComponent } from './views/contratos-crud/contratos-crud.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path: "contratos",
  component: ContratosCrudComponent
},{
  path: "contratos/prestador",
  component: CadastroPrestadorCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
