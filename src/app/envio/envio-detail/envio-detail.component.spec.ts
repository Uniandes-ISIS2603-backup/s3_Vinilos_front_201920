import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDetailComponent } from './envio-detail.component';

describe('EnvioDetailComponent', () => {
  let component: EnvioDetailComponent;
  let fixture: ComponentFixture<EnvioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
