
import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { CadastroPrestador } from './../cadastro-prestador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-prestador-read',
  templateUrl: './cadastro-prestador-read.component.html',
  styleUrls: ['./cadastro-prestador-read.component.css']
})
export class CadastroPrestadorReadComponent implements OnInit {
  
  cadastroPrestadores: CadastroPrestador[]|undefined
  
  constructor(private cadastroPrestadorService:CadastroPrestadorService) { }

  ngOnInit(): void {
    this.cadastroPrestadorService.read().subscribe(cadastroPrestadores=>{
      this.cadastroPrestadores = cadastroPrestadores
      console.log(cadastroPrestadores);
      /**
       * retrna no log o array de cadastrados
       */
      
    })
  }

}
