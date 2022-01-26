import { Router, ActivatedRoute } from '@angular/router';
import { CadastroContratosService } from './../cadastro-contratos.service';
import { CadastroContrato } from '../cadastro-contrato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contrato-delete',
  templateUrl: './cadastro-contrato-delete.component.html',
  styleUrls: ['./cadastro-contrato-delete.component.css']
})
export class CadastroContratoDeleteComponent implements OnInit {

  cadastroContratos: CadastroContrato = {
    prestadorId: 0,
    CPFOrCNPJ:"",
    nome:"",
    servico:"",
    vigencia:{
      inicio:"",
      fim: ""
    }
  }

  constructor(
    private cadastroContratosService: CadastroContratosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cadastroContratosService.ReadById(`${id}`).subscribe(cadastroContrato => {
      this.cadastroContratos = cadastroContrato
    })
  }

  deleteCadastroContrato(): void {
    this.cadastroContratosService.delete(`${this.cadastroContratos.id}`).subscribe(() => {
      this.cadastroContratosService.showMessage('Cadastro excluído com sucesso')
      this.router.navigate(['/contratos'])
    }
    )
  }
  cancel(): void {
    this.router.navigate(['/contratos'])
  }
}
