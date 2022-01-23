
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Contratos-crud',
  templateUrl: './Contratos-crud.component.html',
  styleUrls: ['./Contratos-crud.component.css']
})
export class ContratosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de contratos',
      icon: 'work',
      routeUrl: "/contratos"
    }
   }

  navigateToCadastroContratoCreate(): void {
    this.router.navigate(['/contratos/cadastro'])
    
  }

  ngOnInit(): void {
  }

}
