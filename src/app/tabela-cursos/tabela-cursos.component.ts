import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.css']
})
export class TabelaCursosComponent implements OnInit {
  //Cursos exibidos na tabela de cursos
  cursos = [
    'Análise e Desenvolvimento de Sistemas',
    'Eventos',
    'Gestão Comercial',
    'Gestão Empresarial',
    'Recursos Humanos',
  ]

  //Envio dos cursos para o formulário de aluno
  @Output() emitirCurso = new EventEmitter();
  ngOnInit() {
    this.emitirCurso.emit(this.cursos);
  }

  //Adição do curso na tabela e no formulário de aluno
  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
    this.emitirCurso.emit(this.cursos);
    console.log(this.cursos);
  }

  //Booleanos de exibição
  @Input() exibirTabela = false;
  @Input() exibirInsercao = false;
}
