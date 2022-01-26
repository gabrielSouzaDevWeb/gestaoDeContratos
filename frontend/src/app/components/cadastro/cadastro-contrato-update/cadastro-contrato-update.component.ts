import { CadastroPrestadorService } from './../cadastro-prestador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroContrato } from './../cadastro-contrato.model';
import { CadastroContratosService } from './../cadastro-contratos.service';
import { Component, OnInit } from '@angular/core';
import { CadastroPrestador } from '../cadastro-prestador.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contrato-update',
  templateUrl: './cadastro-contrato-update.component.html',
  styleUrls: ['./cadastro-contrato-update.component.css']
})
export class CadastroContratoUpdateComponent implements OnInit {

  cadastroContratos: CadastroContrato = {
    prestadorId: 0,
    CPFOrCNPJ: "",
    nome: "",
    servico: "",
    vigencia: {
      inicio: "",
      fim: ""
    }
  }

  listaPrestadores: Array<CadastroPrestador> = []
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  constructor(
    private cadastroContratosService: CadastroContratosService,
    private router: Router,
    private route: ActivatedRoute,
    private cadastroPrestadorService: CadastroPrestadorService
  ) { }

  ngOnInit(): void {

    this.cadastroPrestadorService.read().subscribe(cadastroPrestador => {
      const id = this.route.snapshot.paramMap.get('id')
      this.cadastroContratosService.ReadById(`${id}`).subscribe(cadastroContrato => {
        this.cadastroContratos = cadastroContrato
        this.selected.setValue(cadastroContrato.prestadorId)
      })
      this.listaPrestadores = cadastroPrestador
    })


    this.selected.valueChanges.subscribe(value => {
      this.cadastroContratos.prestadorId = this.selected.value
      const findSelectedPrestador = this.listaPrestadores.filter(e => e.id === value)[0]
      console.log(findSelectedPrestador)
      this.cadastroContratos.CPFOrCNPJ = findSelectedPrestador.CPFOrCNPJ
      this.cadastroContratos.nome = findSelectedPrestador.nome
    })

  }



  updateCadastroContrato(): void {
    this.cadastroContratosService.update(this.cadastroContratos).subscribe(() => {
      this.cadastroContratosService.showMessage('Contrato atualizado com sucesso!')
      this.router.navigate(['/contratos'])

    })
  }

  cancel(): void {
    this.router.navigate(['/contratos'])
  }

}