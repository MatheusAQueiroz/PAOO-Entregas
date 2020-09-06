import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent {

  @Output() adicionarCurso = new EventEmitter();

  adicionar(curso) {
    console.log('Passou por adicionar()');
    this.adicionarCurso.emit(curso);
  }
}
