import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { BtnBorderDirective } from './btn-border.directive';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabelaCursosComponent,
    FormCursoComponent,
    FormAlunoComponent,
    BtnBorderDirective,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
