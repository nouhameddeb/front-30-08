import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOutillageComponent } from './show-outillage.component';

describe('ShowOutillageComponent', () => {
  let component: ShowOutillageComponent;
  let fixture: ComponentFixture<ShowOutillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOutillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOutillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
