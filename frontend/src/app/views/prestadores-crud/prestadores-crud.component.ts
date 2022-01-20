import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestadores-crud',
  templateUrl: './prestadores-crud.component.html',
  styleUrls: ['./prestadores-crud.component.css']
})
export class PrestadoresCrudComponent implements OnInit {

  constructor(private router : Router) { }

  navigateToPrestadorCadastroCreate(): void{
    this.router.navigate(['/prestadores/cadastro'])
  }

  ngOnInit(): void {
  }

}
