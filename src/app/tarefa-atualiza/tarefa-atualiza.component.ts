import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TarefaService } from '../services/tarefa.service';
import { ITarefa, createITarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-tarefa-atualiza',
  templateUrl: './tarefa-atualiza.component.html',
  styleUrls: ['./tarefa-atualiza.component.css']
})
export class TarefaAtualizaComponent implements OnInit {
  public categorias: string[] = [ ];
  public categoriaSelecionada: string = '';
  public categoriaIndice: number = -1;
  public tarefa: ITarefa = createITarefa();

  constructor(private rota: Router, private rotaAtiva: ActivatedRoute, private tarefaServ: TarefaService) { }

  ngOnInit(): void {
    this.categorias = this.tarefaServ.getCategorias();
    const id: string = this.rotaAtiva.snapshot.paramMap.get('id') || '0';

    console.log(id);

    this.tarefa = this.tarefaServ.get(id);
    this.categoriaSelecionada = this.tarefa.categoria;
    this.categoriaIndice = this.categorias.findIndex((obj)=> obj === this.categoriaSelecionada);

    console.log("Tarefa edit", this.tarefa);
  }
  
  
  public selecionarCategoria(index: number) {
    this.categoriaSelecionada = this.categorias[index];
    this.categoriaIndice = index;

    console.log(this.categoriaSelecionada);
  }
  
  public atualizar() {
    this.tarefa.categoria = this.categoriaSelecionada;
    this.tarefaServ.update(this.tarefa);
    this.rota.navigate(['/home']);
  }

  
  public corCategoria(index: number) {
    return (this.categoriaIndice==index)? 'btn btn-primary btn-sm mx-1': 'btn btn-outline-primary btn-sm mx-1';
  }
}
