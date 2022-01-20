import { CadastroContratosService } from './../cadastro-contratos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-contrato-create',
  templateUrl: './cadastro-contrato-create.component.html',
  styleUrls: ['./cadastro-contrato-create.component.css']
})
export class CadastroContratoCreateComponent implements OnInit {

  constructor(private cadastroContratosService: CadastroContratosService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createCadastro():void{
    this.cadastroContratosService.showMessage('Cadastrado com Sucesso!!')

  }
  
  cancel():void{
    this.router.navigate(["/contratos"])

  }
}
