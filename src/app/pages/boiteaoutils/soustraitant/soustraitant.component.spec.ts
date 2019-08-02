import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoustraitantComponent } from './soustraitant.component';

describe('SoustraitantComponent', () => {
  let component: SoustraitantComponent;
  let fixture: ComponentFixture<SoustraitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoustraitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoustraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
