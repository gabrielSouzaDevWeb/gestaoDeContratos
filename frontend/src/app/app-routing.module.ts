import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { ContratosCrudComponent } from './views/contratos-crud/contratos-crud.component';
import { PrestadoresCrudComponent } from './views/prestadores-crud/prestadores-crud.component';

import { CadastroContratoCreateComponent } from './components/cadastro/cadastro-contrato-create/cadastro-contrato-create.component';
import { CadastroPrestadorCreateComponent } from './components/cadastro/cadastro-prestador-create/cadastro-prestador-create.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path: "contratos",
  component: ContratosCrudComponent
},{
  path: "contratos/cadastro",
  component: CadastroContratoCreateComponent 
},{
  path:"prestadores",
  component: PrestadoresCrudComponent
},{
  path:"prestadores/cadastro",
  component: CadastroPrestadorCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
