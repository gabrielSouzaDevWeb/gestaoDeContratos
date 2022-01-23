import { map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroContrato } from './cadastro-contrato.model';

@Injectable({
  providedIn: 'root'
})

export class CadastroContratosService {

  baseUrl = "http://localhost:3001/contratos"

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError: boolean = false):void{
    this.MatSnackBar.open(msg,'fechar',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError?['msg-error']:['msg-success']
    })  
  }

  create(cadastroContrato: CadastroContrato):Observable<CadastroContrato>{
    return this.http.post<CadastroContrato>(this.baseUrl, cadastroContrato).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }

  read():Observable<CadastroContrato[]>{
    return this.http.get<CadastroContrato[]>(this.baseUrl)
  }
  ReadById(id:string):Observable<CadastroContrato>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<CadastroContrato>(url)
  }

  update(cadastroContrato:CadastroContrato):Observable<CadastroContrato> {
    const url = `${this.baseUrl}/${cadastroContrato.id}`
    return this.http.put<CadastroContrato>(url,cadastroContrato)
  }

  delete(id: string): Observable<CadastroContrato>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<CadastroContrato>(url)
  }
}