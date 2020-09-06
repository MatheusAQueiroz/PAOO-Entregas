import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent {
  //Envio dos cursos para o formulário de aluno
  @Output() adicionarCurso = new EventEmitter();
  adicionar(curso) {
    this.adicionarCurso.emit(curso);
  }
}
