import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutillageComponent } from './outillage.component';

describe('OutillageComponent', () => {
  let component: OutillageComponent;
  let fixture: ComponentFixture<OutillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
