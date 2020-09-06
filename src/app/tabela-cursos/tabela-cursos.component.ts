import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.css']
})
export class TabelaCursosComponent  {
  cursos = [
    'Análise e Desenvolvimento de Sistemas',
    'Eventos',
    'Gestão Comercial',
    'Gestão Empresarial',
    'Recursos Humanos',
  ]

  onAdicionarCurso(curso) {
    console.log('Passou por onAdicionarCurso()');
    this.cursos = [curso, ...this.cursos];
  }

  exibirTabela = false;
  exibirInsercao = false;

  alterarExibicaoTabela() {
    this.exibirTabela = !this.exibirTabela;
  }
  alterarExibicaoInsercao() {
    this.exibirInsercao = !this.exibirInsercao;
  }
  obterTextoTabela() {
    return this.exibirTabela ? 'Ocultar' : 'Exibir';
  }
  obterTextoInsercao() {
    return this.exibirInsercao ? 'Ocultar' : 'Exibir';
  }
}
