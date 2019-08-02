import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContratComponent } from './modal-contrat.component';

describe('ModalContratComponent', () => {
  let component: ModalContratComponent;
  let fixture: ComponentFixture<ModalContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
