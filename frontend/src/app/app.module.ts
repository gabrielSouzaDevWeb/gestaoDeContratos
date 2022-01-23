//modulos:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'

//componentes
import { HeaderComponent } from './components/template/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ContratosCrudComponent } from './views/contratos-crud/contratos-crud.component';

//diretivas:
import { PrimaryColorFontDirective } from './directives/primary-color-font.directive';
import { CadastroPrestadorCreateComponent } from './components/cadastro/cadastro-prestador-create/cadastro-prestador-create.component';
import { PrestadoresCrudComponent } from './views/prestadores-crud/prestadores-crud.component';
import { CadastroContratoCreateComponent } from './components/cadastro/cadastro-contrato-create/cadastro-contrato-create.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CadastroPrestadorReadComponent } from './components/cadastro/cadastro-prestador-read/cadastro-prestador-read.component';
import { CadastroContratoReadComponent } from './components/cadastro/cadastro-contrato-read/cadastro-contrato-read.component';
import { CadastroPrestadorRead2Component } from './components/cadastro/cadastro-prestador-read2/cadastro-prestador-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CadastroPrestadorUpdateComponent } from './components/cadastro/cadastro-prestador-update/cadastro-prestador-update.component';
import { CadastroContratoUpdateComponent } from './components/cadastro/cadastro-contrato-update/cadastro-contrato-update.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContratosCrudComponent,
    PrimaryColorFontDirective,
    CadastroPrestadorCreateComponent,
    PrestadoresCrudComponent,
    CadastroContratoCreateComponent,
    CadastroPrestadorReadComponent,
    CadastroContratoReadComponent,
    CadastroPrestadorRead2Component,
    CadastroPrestadorUpdateComponent,
    CadastroContratoUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
