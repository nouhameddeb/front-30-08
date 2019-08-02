import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshContratComponent } from './refresh-contrat.component';

describe('RefreshContratComponent', () => {
  let component: RefreshContratComponent;
  let fixture: ComponentFixture<RefreshContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
