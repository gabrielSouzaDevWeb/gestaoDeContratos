import { Component, OnInit } from '@angular/core';
import { CadastroContratosService } from '../cadastro/cadastro-contratos.service';
import { CadastroPrestadorService } from '../cadastro/cadastro-prestador.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countContratos: number = 0;
  countPrestadores: number = 0;

  constructor(
    private cadastroContratosService: CadastroContratosService,
    private cadastroPrestadorService:CadastroPrestadorService
  ) { }

  ngOnInit(): void {
    this.cadastroContratosService.read().subscribe(cadastroContratos => {
      this.countContratos = cadastroContratos.length
    })
    this.cadastroPrestadorService.read().subscribe(cadastroPrestadores => {
      this.countPrestadores = cadastroPrestadores.length
    })
  }
  
}
