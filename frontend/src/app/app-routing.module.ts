import { CadastroPrestadorDeleteComponent } from './components/cadastro/cadastro-prestador-delete/cadastro-prestador-delete.component';
import { CadastroPrestadorUpdateComponent } from './components/cadastro/cadastro-prestador-update/cadastro-prestador-update.component';
import { CadastroContratoUpdateComponent } from './components/cadastro/cadastro-contrato-update/cadastro-contrato-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { ContratosCrudComponent } from './views/contratos-crud/contratos-crud.component';
import { PrestadoresCrudComponent } from './views/prestadores-crud/prestadores-crud.component';

import { CadastroContratoCreateComponent } from './components/cadastro/cadastro-contrato-create/cadastro-contrato-create.component';
import { CadastroPrestadorCreateComponent } from './components/cadastro/cadastro-prestador-create/cadastro-prestador-create.component';
import { CadastroContratoDeleteComponent } from './components/cadastro/cadastro-contrato-delete/cadastro-contrato-delete.component';

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
},{
  path:"prestadores/update/:id",
  component: CadastroPrestadorUpdateComponent
},{
  path: "contratos/update/:id",
  component: CadastroContratoUpdateComponent
},{
  path:"prestadores/delete/:id",
  component: CadastroPrestadorDeleteComponent
},{
  path: "contratos/delete/:id",
  component: CadastroContratoDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
