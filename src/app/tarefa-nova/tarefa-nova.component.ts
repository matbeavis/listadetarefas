import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TarefaService } from '../services/tarefa.service';
import { ITarefa, createITarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './tarefa-nova.component.html',
  styleUrls: ['./tarefa-nova.component.css']
})
export class TarefaNovaComponent implements OnInit {
  public categorias: string[] = [ ];
  public categoriaSelecionada: string = '';
  public categoriaIndice: number = -1;

  public tarefa: ITarefa = createITarefa();

  constructor(private rota: Router, private tarefaServ: TarefaService) { }

  ngOnInit(): void {
   this.categorias = this.tarefaServ.getCategorias();
  }

  public salvar() {

    console.log(this.tarefa);
    this.tarefa.categoria = this.categoriaSelecionada;
    if (this.tarefa.nome && this.tarefa.data && this.tarefa.categoria) {
      
      this.tarefaServ.add(this.tarefa);

      this.rota.navigate(['/home']);
    } else {
        console.log('Não é possível salvar uma tarefa vazia');
    }

  }

  public selecionarCategoria(index: number) {
    this.categoriaSelecionada = this.categorias[index];

    this.categoriaIndice = index;

  }

  public corCategoria(index: number) {
    return (this.categoriaIndice==index)? 'btn btn-primary btn-sm mx-1': 'btn btn-outline-primary btn-sm mx-1';
  }
}
