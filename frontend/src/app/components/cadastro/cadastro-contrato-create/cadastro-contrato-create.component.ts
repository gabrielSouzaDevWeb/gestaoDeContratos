import { CadastroContrato } from './../cadastro-contrato.model';
import { CadastroContratosService } from './../cadastro-contratos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-contrato-create',
  templateUrl: './cadastro-contrato-create.component.html',
  styleUrls: ['./cadastro-contrato-create.component.css']
})
export class CadastroContratoCreateComponent implements OnInit {

  cadastroContratos: CadastroContrato = {
      CPFOrCNPJ:"",
      nome:"Gabriel Lucas De Souza",
      servico:"",
      vigencia:{
        inicio:"",
        fim: ""
      }
  }

  constructor(private cadastroContratosService: CadastroContratosService,
     private router: Router) { }

  ngOnInit(): void {
  }
  
  createCadastroContrato():void{
    this.cadastroContratosService.create(this.cadastroContratos).subscribe(()=>{
      this.cadastroContratosService.showMessage('Cadastrado com Sucesso!!')
      this.router.navigate(["/contratos"])
    })


  }
  
  cancel():void{
    this.router.navigate(["/contratos"])
  }
}
