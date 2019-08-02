import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshMachineComponent } from './refresh-machine.component';

describe('RefreshMachineComponent', () => {
  let component: RefreshMachineComponent;
  let fixture: ComponentFixture<RefreshMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
