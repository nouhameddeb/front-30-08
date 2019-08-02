import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionnelleComponent } from './conditionnelle.component';

describe('ConditionnelleComponent', () => {
  let component: ConditionnelleComponent;
  let fixture: ComponentFixture<ConditionnelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionnelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
