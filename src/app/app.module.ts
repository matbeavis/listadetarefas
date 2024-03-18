import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TarefaNovaComponent } from './tarefa-nova/tarefa-nova.component';
import { TarefaAtualizaComponent } from './tarefa-atualiza/tarefa-atualiza.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarefaNovaComponent,
    TarefaAtualizaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
