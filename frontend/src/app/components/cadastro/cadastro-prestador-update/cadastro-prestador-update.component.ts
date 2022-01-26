import { ActivatedRoute, Router } from '@angular/router';
import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { CadastroPrestador } from '../cadastro-prestador.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-prestador-update',
  templateUrl: './cadastro-prestador-update.component.html',
  styleUrls: ['./cadastro-prestador-update.component.css']
})
export class CadastroPrestadorUpdateComponent implements OnInit {

  cepNaoEncontrado: boolean = false
  cep = new FormControl('', [Validators.required]);
  selectTipoPrestador = new FormControl('F', [Validators.required]);

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

    this.cep.valueChanges.subscribe(cep => {
      console.log(cep)
      if(String(cep).length === 8){
        this.cadastroPrestadorService.findCepViaCep(cep).subscribe(result => {
          if(result.data.erro !== undefined){
            this.cepNaoEncontrado = true
          }else{
            this.cadastroPrestador.endereco.logradouro = result.logradouro
            this.cadastroPrestador.endereco.bairro = result.bairro
            this.cadastroPrestador.endereco.complemento =result.complemento
            this.cadastroPrestador.endereco.bairro = result.bairro
            this.cadastroPrestador.endereco.cidade = result.localidade
            this.cadastroPrestador.endereco.UF = result.uf
          }
        })
      }
    })
    this.selectTipoPrestador.valueChanges.subscribe(tipo => {
      this.cadastroPrestador.tipo = tipo
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
