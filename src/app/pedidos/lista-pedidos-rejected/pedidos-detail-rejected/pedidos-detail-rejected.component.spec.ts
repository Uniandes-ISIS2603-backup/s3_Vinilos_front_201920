import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDetailRejectedComponent } from './pedidos-detail-rejected.component';

describe('PedidosDetailRejectedComponent', () => {
  let component: PedidosDetailRejectedComponent;
  let fixture: ComponentFixture<PedidosDetailRejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosDetailRejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosDetailRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
