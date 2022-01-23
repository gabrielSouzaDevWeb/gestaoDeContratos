import { ActivatedRoute, Router } from '@angular/router';
import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { CadastroPrestador } from '../cadastro-prestador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-prestador-update',
  templateUrl: './cadastro-prestador-update.component.html',
  styleUrls: ['./cadastro-prestador-update.component.css']
})
export class CadastroPrestadorUpdateComponent implements OnInit {

  constructor(
    private cadastroPrestadorService: CadastroPrestadorService,
    private router : Router,
    private route:ActivatedRoute) { }

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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id);
    this.cadastroPrestadorService.ReadById(`${id}`).subscribe(cadastroPrestador=>{
      this.cadastroPrestador = cadastroPrestador
    })
  }

  updateCadastroPrestador():void{

  }

  cancel():void{
    this.router.navigate(['/prestadores'])
  }

}
