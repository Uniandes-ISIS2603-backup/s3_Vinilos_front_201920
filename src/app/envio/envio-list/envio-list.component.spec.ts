import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioListComponent } from './envio-list.component';

describe('EnvioListComponent', () => {
  let component: EnvioListComponent;
  let fixture: ComponentFixture<EnvioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
