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
    this.cadastroPrestadorService.ReadById(`${id}`).subscribe(cadastroPrestador=>{
      this.cadastroPrestador = cadastroPrestador
    })
  }

  updateCadastroPrestador():void{
    this.cadastroPrestadorService.update(this.cadastroPrestador).subscribe(()=>{
      this.cadastroPrestadorService.showMessage('Prestador atualizado com sucesso!')
      this.router.navigate(['/prestadores'])
    })
  }

  cancel():void{
    this.router.navigate(['/prestadores'])
  }

  
}
