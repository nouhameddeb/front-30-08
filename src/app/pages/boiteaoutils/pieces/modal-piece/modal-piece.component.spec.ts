import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPieceComponent } from './modal-piece.component';

describe('ModalPieceComponent', () => {
  let component: ModalPieceComponent;
  let fixture: ComponentFixture<ModalPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
