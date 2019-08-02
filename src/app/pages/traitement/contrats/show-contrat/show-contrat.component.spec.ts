import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContratComponent } from './show-contrat.component';

describe('ShowContratComponent', () => {
  let component: ShowContratComponent;
  let fixture: ComponentFixture<ShowContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
