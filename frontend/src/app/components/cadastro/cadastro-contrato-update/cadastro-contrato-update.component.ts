import { Router, ActivatedRoute } from '@angular/router';
import { CadastroContrato } from './../cadastro-contrato.model';
import { CadastroContratosService } from './../cadastro-contratos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contrato-update',
  templateUrl: './cadastro-contrato-update.component.html',
  styleUrls: ['./cadastro-contrato-update.component.css']
})
export class CadastroContratoUpdateComponent implements OnInit {

  cadastroContratos: CadastroContrato = {
      CPFOrCNPJ:"",
      nome:"Gabriel Lucas De Souza",
      servico:"",
      vigencia:{
        inicio:"",
        fim: ""
      }
  }

  constructor(
    private cadastroContratosService:CadastroContratosService,
    private router : Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cadastroContratosService.ReadById(`${id}`).subscribe(cadastroContrato=>{
      this.cadastroContratos = cadastroContrato
    })
  }

  updateCadastroContrato():void{

  }

  cancel():void{
    this.router.navigate(['/contratos'])
  }

}
