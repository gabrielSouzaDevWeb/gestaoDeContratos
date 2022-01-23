import { Router, ActivatedRoute } from '@angular/router';
import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { CadastroPrestador } from './../cadastro-prestador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-prestador-delete',
  templateUrl: './cadastro-prestador-delete.component.html',
  styleUrls: ['./cadastro-prestador-delete.component.css']
})
export class CadastroPrestadorDeleteComponent implements OnInit {

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

  constructor(
    private cadastroPrestadoService: CadastroPrestadorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cadastroPrestadoService.ReadById(`${id}`).subscribe(cadastroPrestador => {
      this.cadastroPrestador = cadastroPrestador
    })
  }

  deleteCadastroPrestador(): void {
    this.cadastroPrestadoService.delete(`${this.cadastroPrestador.id}`).subscribe(() => {
      this.cadastroPrestadoService.showMessage('Cadastro excluído com sucesso')
      this.router.navigate(['/prestadores'])
    }
    )
  }
  cancel(): void {
    this.router.navigate(['/prestadores'])
  }
}
