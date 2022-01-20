
import { CadastroPrestadorService } from '../cadastro-prestador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-prestador-create',
  templateUrl: './cadastro-prestador-create.component.html',
  styleUrls: ['./cadastro-prestador-create.component.css']
})
export class CadastroPrestadorCreateComponent implements OnInit {

  propLegal = "qualquer"

  constructor(private cadastroPrestadorService: CadastroPrestadorService,private router:Router) { }

  ngOnInit(): void {
  }
  
  createCadastro():void{
    this.cadastroPrestadorService.showMessage('Cadastrado com Sucesso!!')

  }
  
  cancel():void{
    this.router.navigate(["/prestadores"])

  }

}
