import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponentVinilo } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponentVinilo;
  let fixture: ComponentFixture<NavComponentVinilo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponentVinilo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponentVinilo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
