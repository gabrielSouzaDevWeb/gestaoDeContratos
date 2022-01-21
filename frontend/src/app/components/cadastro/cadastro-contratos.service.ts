import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CadastroContrato } from './cadastro-contrato.model';

@Injectable({
  providedIn: 'root'
})

export class CadastroContratosService {

  baseUrl = "http://localhost:3001/contratos"

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string):void{
    this.MatSnackBar.open(msg,'fechar',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })  
  }

  create(cadastroContrato: CadastroContrato):Observable<CadastroContrato>{
    return this.http.post<CadastroContrato>(this.baseUrl, cadastroContrato)
  }
}