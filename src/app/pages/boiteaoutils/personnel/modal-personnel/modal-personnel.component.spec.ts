import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonnelComponent } from './modal-personnel.component';

describe('ModalPersonnelComponent', () => {
  let component: ModalPersonnelComponent;
  let fixture: ComponentFixture<ModalPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
