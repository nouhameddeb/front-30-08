import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportinterventionComponent } from './rapportintervention.component';

describe('RapportinterventionComponent', () => {
  let component: RapportinterventionComponent;
  let fixture: ComponentFixture<RapportinterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportinterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportinterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
