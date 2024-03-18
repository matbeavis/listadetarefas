import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaNovaComponent } from './tarefa-nova.component';

describe('TarefaNovaComponent', () => {
  let component: TarefaNovaComponent;
  let fixture: ComponentFixture<TarefaNovaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarefaNovaComponent]
    });
    fixture = TestBed.createComponent(TarefaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
