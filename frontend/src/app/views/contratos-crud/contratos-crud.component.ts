import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Contratos-crud',
  templateUrl: './Contratos-crud.component.html',
  styleUrls: ['./Contratos-crud.component.css']
})
export class ContratosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToCadastroContratoCreate(): void {
    this.router.navigate(['/contratos/cadastro'])
    
  }

  ngOnInit(): void {
  }

}
