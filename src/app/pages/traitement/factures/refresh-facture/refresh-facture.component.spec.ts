import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshFactureComponent } from './refresh-facture.component';

describe('RefreshFactureComponent', () => {
  let component: RefreshFactureComponent;
  let fixture: ComponentFixture<RefreshFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
