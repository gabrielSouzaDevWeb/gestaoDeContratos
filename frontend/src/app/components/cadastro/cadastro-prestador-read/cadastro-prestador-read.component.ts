import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { CadastroPrestador } from './../cadastro-prestador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-prestador-read',
  templateUrl: './cadastro-prestador-read.component.html',
  styleUrls: ['./cadastro-prestador-read.component.css']
})
export class CadastroPrestadorReadComponent implements OnInit {
  
  cadastroPrestadores: CadastroPrestador[] = [];
  displayedColumns= ['id','tipo','CPFOrCNPJ','nome',
'email','CEP','logradouro','complemento','bairro','cidade','UF','action']
  
  constructor(private cadastroPrestadorService:CadastroPrestadorService) { }

  ngOnInit(): void {
    this.cadastroPrestadorService.read().subscribe(cadastroPrestadores=>{
      this.cadastroPrestadores = cadastroPrestadores
    })
  }

}
