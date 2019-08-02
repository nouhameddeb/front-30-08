import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshPieceComponent } from './refresh-piece.component';

describe('RefreshPieceComponent', () => {
  let component: RefreshPieceComponent;
  let fixture: ComponentFixture<RefreshPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
