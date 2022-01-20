import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CadastroPrestadorService {

  constructor(private MatSnackBar: MatSnackBar) { }

  showMessage(msg:string):void{
    this.MatSnackBar.open(msg,'fechar',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })  
  }
}