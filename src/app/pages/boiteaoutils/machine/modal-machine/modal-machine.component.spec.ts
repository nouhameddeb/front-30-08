import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMachineComponent } from './modal-machine.component';

describe('ModalMachineComponent', () => {
  let component: ModalMachineComponent;
  let fixture: ComponentFixture<ModalMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
