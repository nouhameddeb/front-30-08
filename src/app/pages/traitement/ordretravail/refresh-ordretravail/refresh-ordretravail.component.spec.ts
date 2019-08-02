import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshOrdretravailComponent } from './refresh-ordretravail.component';

describe('RefreshOrdretravailComponent', () => {
  let component: RefreshOrdretravailComponent;
  let fixture: ComponentFixture<RefreshOrdretravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshOrdretravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshOrdretravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
