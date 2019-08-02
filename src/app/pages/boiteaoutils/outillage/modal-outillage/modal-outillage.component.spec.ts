import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOutillageComponent } from './modal-outillage.component';

describe('ModalOutillageComponent', () => {
  let component: ModalOutillageComponent;
  let fixture: ComponentFixture<ModalOutillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOutillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOutillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
