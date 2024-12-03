import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSixComponent } from './c-six.component';

describe('CSixComponent', () => {
  let component: CSixComponent;
  let fixture: ComponentFixture<CSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
