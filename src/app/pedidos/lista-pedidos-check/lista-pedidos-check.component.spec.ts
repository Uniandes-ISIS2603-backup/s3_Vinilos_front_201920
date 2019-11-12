import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosCheckComponent } from './lista-pedidos-check.component';

describe('ListaPedidosCheckComponent', () => {
  let component: ListaPedidosCheckComponent;
  let fixture: ComponentFixture<ListaPedidosCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
