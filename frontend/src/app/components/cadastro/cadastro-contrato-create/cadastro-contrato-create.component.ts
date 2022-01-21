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
      CPFOrCNPJ:"122.796.123-16",
      nome:"Jean Gomes",
      servico:"fullstack",
      vigencia:{
        inicio:"01/02/2021",
        fim: "01/02/2024"
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
