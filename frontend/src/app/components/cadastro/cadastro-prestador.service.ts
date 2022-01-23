import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroPrestador } from './cadastro-prestador.model'

@Injectable({
  providedIn: 'root'
})

export class CadastroPrestadorService {

  baseUrl = "http://localhost:3001/prestadores"

  constructor(private MatSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string):void{
    this.MatSnackBar.open(msg,'fechar',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })  
  }

  create(cadastroPrestador : CadastroPrestador): Observable<CadastroPrestador>{
    return this.http.post<CadastroPrestador>(this.baseUrl,cadastroPrestador)
  }
  read():Observable<CadastroPrestador[]>{
    return this.http.get<CadastroPrestador[]>(this.baseUrl)
  }
  ReadById(id:string):Observable<CadastroPrestador>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<CadastroPrestador>(url)
  }

  update(cadastroPrestador:CadastroPrestador):Observable<CadastroPrestador> {
    const url = `${this.baseUrl}/${cadastroPrestador.id}`
    return this.http.put<CadastroPrestador>(url,cadastroPrestador)
  }
}