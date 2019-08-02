import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshOutillageComponent } from './refresh-outillage.component';

describe('RefreshOutillageComponent', () => {
  let component: RefreshOutillageComponent;
  let fixture: ComponentFixture<RefreshOutillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshOutillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshOutillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
