import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { ITarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tarefas: ITarefa[] = [ ];

  public hoje: number = Date.now();

  constructor(private tarefaServ: TarefaService) { }

  ngOnInit(): void {
    this.listarTarefas();
  }

  public listarTarefas() {
    this.tarefas = this.tarefaServ.getAll();
    
    console.log(this.tarefas);
  }

  public delete(id: string) {
    this.tarefaServ.delete(id);
    this.listarTarefas();
  }

  public corPrioridade(prioridade: string) {
    return (prioridade === 'alto')? 'red':  (prioridade === 'baixo')? 'green': 'yellow';
  }
}
