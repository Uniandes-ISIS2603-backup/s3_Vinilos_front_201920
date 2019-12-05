import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViniloCreateComponent } from './vinilo-create.component';

describe('ViniloCreateComponent', () => {
  let component: ViniloCreateComponent;
  let fixture: ComponentFixture<ViniloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViniloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViniloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
