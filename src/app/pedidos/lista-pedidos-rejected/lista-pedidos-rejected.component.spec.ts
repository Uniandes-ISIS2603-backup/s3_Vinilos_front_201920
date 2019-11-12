import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosRejectedComponent } from './lista-pedidos-rejected.component';

describe('ListaPedidosRejectedComponent', () => {
  let component: ListaPedidosRejectedComponent;
  let fixture: ComponentFixture<ListaPedidosRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
