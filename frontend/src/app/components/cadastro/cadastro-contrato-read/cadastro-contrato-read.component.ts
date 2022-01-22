import { CadastroContratosService } from './../cadastro-contratos.service';
import { CadastroContrato } from './../cadastro-contrato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contrato-read',
  templateUrl: './cadastro-contrato-read.component.html',
  styleUrls: ['./cadastro-contrato-read.component.css']
})
export class CadastroContratoReadComponent implements OnInit {

  cadastroContrato: CadastroContrato[] |undefined

  constructor(private cadastroContratosService: CadastroContratosService
    ) { }

  ngOnInit(): void {
    this.cadastroContratosService.read().subscribe(cadastroContratos =>{
      this.cadastroContrato = cadastroContratos
      console.log(cadastroContratos);
      
    })
  }

}
