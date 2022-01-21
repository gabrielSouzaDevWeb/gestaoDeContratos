import { CadastroPrestador } from './../cadastro-prestador.model';
import { CadastroPrestadorService } from '../cadastro-prestador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-prestador-create',
  templateUrl: './cadastro-prestador-create.component.html',
  styleUrls: ['./cadastro-prestador-create.component.css']
})
export class CadastroPrestadorCreateComponent implements OnInit {

  CadastroPrestador: CadastroPrestador ={
    
      tipo: "Pessoa física",
      CPFOrCNPJ: "132.719.644-16",
      nome: "Gabriel Souza",
      email: "Gabrielsouzadevweb@gmail.com",
      endereco: {
        CEP: "583300-00",
        logradouro: "Rua Paraná",
        numero: 238,
        bairro: "centro",
        cidade: "Juripiranga",
        UF: "PB"
      }
  }

  constructor(private cadastroPrestadorService: CadastroPrestadorService,private router:Router) { }

  ngOnInit(): void {
  }
  
  createCadastroPrestador():void{
    this.cadastroPrestadorService.create(this.CadastroPrestador).subscribe(()=>{
      this.cadastroPrestadorService.showMessage('Cadastrado com Sucesso!!')
      this.router.navigate(["/prestadores"])
      
    })

  }
  
  cancel():void{
    this.router.navigate(["/prestadores"])

  }

}
