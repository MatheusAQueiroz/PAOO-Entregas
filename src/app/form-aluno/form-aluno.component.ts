import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent {
  //Envio dos cursos para o formulário de aluno
  @Input() cursos;

  //Formulário de alunos
  alunos = [
    {nome: 'Ana', idade: '33', email: 'ana-123@gmail.com', curso: 'Engenharia'},
    {nome: 'Beatriz', idade: '26', email: 'bia.triz9@hotmail.com', curso: 'Biologia'},
    {nome: 'Carlos', idade: '21', email: 'car141298@yahoo.com', curso: 'Engenharia'}
  ]
  adicionarAluno(nome, idade, email, curso) {
    const aluno = {
    nome: nome,
    idade: idade,
    email: email,
    curso: curso
    }
    this.alunos = [aluno, ...this.alunos];
  }
}
