import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatec-ipi-paoo-exercicios';

  //Envio dos cursos para o formulário de aluno
  cursos: Array<string>;
  onEmitirCurso(cursos) {
    this.cursos = cursos;
  }

  //Alteração da exibição da tabela e inserção de cursos
  exibirTabela = false;
  exibirInsercao = false;
  onAltTabelaCursos(estado: boolean) {
    this.exibirTabela = estado;
  }
  onAltExibicaoInsercao(estado: boolean){
    this.exibirInsercao = estado;
  }
}
