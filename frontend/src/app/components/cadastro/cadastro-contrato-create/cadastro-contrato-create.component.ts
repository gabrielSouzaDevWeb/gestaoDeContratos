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
    name: 'Cadastro de Teste',
    price:125.98
  }

  constructor(private cadastroContratosService: CadastroContratosService,
     private router: Router) { }

  ngOnInit(): void {
  }
  
  createCadastro():void{
    this.cadastroContratosService.create(this.cadastroContratos).subscribe(()=>{
      this.cadastroContratosService.showMessage('Cadastrado com Sucesso!!')
      this.router.navigate(["/contratos"])
    })


  }
  
  cancel():void{
    this.router.navigate(["/contratos"])
  }
}
