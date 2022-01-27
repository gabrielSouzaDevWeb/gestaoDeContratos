import { map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroPrestador } from './cadastro-prestador.model'

@Injectable({
  providedIn: 'root'
})

export class CadastroPrestadorService {

  baseUrl = "api/prestadores"
  baseUrlAdressesEnpoints = "api/enderecos"

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.MatSnackBar.open(msg, 'fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(cadastroPrestador: CadastroPrestador): Observable<CadastroPrestador> {
    return this.http.post<CadastroPrestador>(this.baseUrl, cadastroPrestador).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY;
  }


  read(): Observable<CadastroPrestador[]> {
    return this.http.get<CadastroPrestador[]>(this.baseUrl)
  }

  ReadById(id: string): Observable<CadastroPrestador> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<CadastroPrestador>(url)
  }

  findCepViaCep(cep: string): Observable<any> {
    const url = `${this.baseUrlAdressesEnpoints}/getCepData/${cep}`
    return this.http.get<any>(url)
  }

  update(cadastroPrestador: CadastroPrestador): Observable<CadastroPrestador> {
    const url = `${this.baseUrl}/${cadastroPrestador.id}`
    return this.http.put<CadastroPrestador>(url, cadastroPrestador)
  }

  delete(id: string): Observable<CadastroPrestador> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<CadastroPrestador>(url)
  }
}