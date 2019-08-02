import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshDemandeComponent } from './refresh-demande.component';

describe('RefreshDemandeComponent', () => {
  let component: RefreshDemandeComponent;
  let fixture: ComponentFixture<RefreshDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
