import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TarefaNovaComponent } from './tarefa-nova/tarefa-nova.component';
import { TarefaAtualizaComponent } from './tarefa-atualiza/tarefa-atualiza.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nova',
    component: TarefaNovaComponent
  },
  {
    path: 'atualiza/:id',
    component: TarefaAtualizaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
