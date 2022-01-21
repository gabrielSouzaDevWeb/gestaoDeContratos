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

  

  cadastroPrestador: CadastroPrestador ={
    
      tipo: "",
      CPFOrCNPJ: "",
      nome: "",
      email: "",
      endereco: {
        CEP: "",
        logradouro: "",
        complemento:"",
        numero: null,
        bairro: "",
        cidade: "",
        UF: "",
      }
  }

  constructor(private cadastroPrestadorService: CadastroPrestadorService,private router:Router) { }

  ngOnInit(): void {
  }
  
  createCadastroPrestador():void{
    this.cadastroPrestadorService.create(this.cadastroPrestador).subscribe(()=>{
      this.cadastroPrestadorService.showMessage('Cadastrado com Sucesso!!')
      this.router.navigate(["/prestadores"])
      
    })

  }
  
  cancel():void{
    this.router.navigate(["/prestadores"])

  }

}
