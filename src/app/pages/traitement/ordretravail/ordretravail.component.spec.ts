import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdretravailComponent } from './ordretravail.component';

describe('OrdretravailComponent', () => {
  let component: OrdretravailComponent;
  let fixture: ComponentFixture<OrdretravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdretravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdretravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
