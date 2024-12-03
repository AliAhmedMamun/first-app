import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFourComponent } from './c-four.component';

describe('CFourComponent', () => {
  let component: CFourComponent;
  let fixture: ComponentFixture<CFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
