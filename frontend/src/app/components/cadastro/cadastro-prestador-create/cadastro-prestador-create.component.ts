import { CadastroPrestador } from './../cadastro-prestador.model';
import { CadastroPrestadorService } from '../cadastro-prestador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-prestador-create',
  templateUrl: './cadastro-prestador-create.component.html',
  styleUrls: ['./cadastro-prestador-create.component.css']
})
export class CadastroPrestadorCreateComponent implements OnInit {

  cepNaoEncontrado: boolean = false
  cep = new FormControl('', [Validators.required]);
  selectTipoPrestador = new FormControl('F', [Validators.required]);

  cadastroPrestador: CadastroPrestador = {

    tipo: "",
    CPFOrCNPJ: "",
    nome: "",
    email: "",
    endereco: {
      CEP: "",
      logradouro: "",
      complemento: "",
      numero: null,
      bairro: "",
      cidade: "",
      UF: "",
    }
  }

  constructor(private cadastroPrestadorService: CadastroPrestadorService, private router: Router) { }

  ngOnInit(): void {
    this.selectTipoPrestador.setValue('F')
    this.cep.valueChanges.subscribe(cep => {
      if (String(cep).length === 8) {
        this.cadastroPrestadorService.findCepViaCep(cep).subscribe(result => {
          if (result.erro !== undefined) {
            this.cepNaoEncontrado = true
          } else {
            this.cadastroPrestador.endereco.logradouro = result.logradouro
            this.cadastroPrestador.endereco.bairro = result.bairro
            this.cadastroPrestador.endereco.complemento = result.complemento
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

  createCadastroPrestador(): void {
    this.cadastroPrestadorService.create(this.cadastroPrestador).subscribe(() => {
      this.cadastroPrestadorService.showMessage('Cadastrado com Sucesso!!')
      this.router.navigate(["/prestadores"])
    })
  }

  cancel(): void {
    this.router.navigate(["/prestadores"])

  }

}
