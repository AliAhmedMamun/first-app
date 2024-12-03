import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CThreeComponent } from './c-three.component';

describe('CThreeComponent', () => {
  let component: CThreeComponent;
  let fixture: ComponentFixture<CThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
