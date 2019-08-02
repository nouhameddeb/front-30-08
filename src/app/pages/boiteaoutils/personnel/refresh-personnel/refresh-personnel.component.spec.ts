import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshPersonnelComponent } from './refresh-personnel.component';

describe('RefreshPersonnelComponent', () => {
  let component: RefreshPersonnelComponent;
  let fixture: ComponentFixture<RefreshPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
