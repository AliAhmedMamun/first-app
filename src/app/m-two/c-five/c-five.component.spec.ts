import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFiveComponent } from './c-five.component';

describe('CFiveComponent', () => {
  let component: CFiveComponent;
  let fixture: ComponentFixture<CFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
