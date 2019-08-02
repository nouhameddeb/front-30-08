import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdretravailComponent } from './show-ordretravail.component';

describe('ShowOrdretravailComponent', () => {
  let component: ShowOrdretravailComponent;
  let fixture: ComponentFixture<ShowOrdretravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrdretravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdretravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
