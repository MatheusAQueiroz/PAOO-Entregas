import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Botões de exibição
  exibirTabela = false;
  exibirInsercao = false;
  @Output() altExibicaoTabela = new EventEmitter();
  @Output() altExibicaoInsercao = new EventEmitter();
  alterarExibicaoTabela() {
    this.exibirTabela = !this.exibirTabela;
    this.altExibicaoTabela.emit(this.exibirTabela);
  }
  alterarExibicaoInsercao() {
    this.exibirInsercao = !this.exibirInsercao;
    this.altExibicaoInsercao.emit(this.exibirInsercao);
  }
  obterTextoTabela() {
    return this.exibirTabela ? 'Ocultar' : 'Exibir';
  }
  obterTextoInsercao() {
    return this.exibirInsercao ? 'Ocultar' : 'Exibir';
  }

  //Estilos para a diretiva ngClass
  obterEstilosBotao(){
    return {
      'btn': true,
      'btn-dark': true,
      'btn-block': true
    };
  }
}
