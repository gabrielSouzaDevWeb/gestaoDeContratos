//modulos:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContratosCrudComponent,
    PrimaryColorFontDirective,
    CadastroPrestadorCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
