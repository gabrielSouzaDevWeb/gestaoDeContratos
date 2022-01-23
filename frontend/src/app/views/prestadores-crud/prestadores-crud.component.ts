import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestadores-crud',
  templateUrl: './prestadores-crud.component.html',
  styleUrls: ['./prestadores-crud.component.css']
})
export class PrestadoresCrudComponent implements OnInit {

  constructor(private router : Router,private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de contratos',
      icon: 'assignment',
      routeUrl: "/prestadores"
    }
   }

  navigateToPrestadorCadastroCreate(): void{
    this.router.navigate(['/prestadores/cadastro'])
  }

  ngOnInit(): void {
  }

}
