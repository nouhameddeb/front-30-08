import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrdretravailComponent } from './modal-ordretravail.component';

describe('ModalOrdretravailComponent', () => {
  let component: ModalOrdretravailComponent;
  let fixture: ComponentFixture<ModalOrdretravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOrdretravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrdretravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
