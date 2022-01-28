import { Injectable } from '@angular/core';
import { CadastroContratosService } from '../cadastro/cadastro-contratos.service';
import { CadastroPrestadorService } from '../cadastro/cadastro-prestador.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private cadastroContratosService: CadastroContratosService,
    private cadastroPrestadorService:CadastroPrestadorService
    ) { }

}
