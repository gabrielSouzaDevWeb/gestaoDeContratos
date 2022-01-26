import { CadastroContrato } from './../cadastro-contrato.model';
import { CadastroContratosService } from './../cadastro-contratos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { CadastroPrestador } from '../cadastro-prestador.model';
import { CadastroPrestadorService } from '../cadastro-prestador.service';

@Component({
  selector: 'app-cadastro-contrato-create',
  templateUrl: './cadastro-contrato-create.component.html',
  styleUrls: ['./cadastro-contrato-create.component.css']
})
export class CadastroContratoCreateComponent implements OnInit {

  listaPrestadores: Array<CadastroPrestador> = []
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  cadastroContratos: CadastroContrato = {
      prestadorId: 0,
      CPFOrCNPJ:"",
      nome:"",
      servico:"",
      vigencia:{
        inicio:"",
        fim: ""
      }
  }

  constructor(
      private cadastroContratosService: CadastroContratosService,
      private router: Router,
      private cadastroPrestadorService: CadastroPrestadorService
    ) { }

  ngOnInit(): void {
    this.cadastroPrestadorService.read().subscribe(cadastroPrestador =>{
      this.listaPrestadores = cadastroPrestador
    })
    this.selected.valueChanges.subscribe(value => {
      this.cadastroContratos.prestadorId = this.selected.value
      const findSelectedPrestador = this.listaPrestadores.filter(e => e.id === value)[0]
      console.log(findSelectedPrestador)
      this.cadastroContratos.CPFOrCNPJ = findSelectedPrestador.CPFOrCNPJ
      this.cadastroContratos.nome = findSelectedPrestador.nome
    })
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
