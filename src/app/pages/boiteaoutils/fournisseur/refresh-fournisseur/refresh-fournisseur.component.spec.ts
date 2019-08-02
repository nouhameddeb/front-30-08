import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshFournisseurComponent } from './refresh-fournisseur.component';

describe('RefreshFournisseurComponent', () => {
  let component: RefreshFournisseurComponent;
  let fixture: ComponentFixture<RefreshFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
