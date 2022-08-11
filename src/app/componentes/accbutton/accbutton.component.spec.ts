import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccbuttonComponent } from './accbutton.component';

describe('AccbuttonComponent', () => {
  let component: AccbuttonComponent;
  let fixture: ComponentFixture<AccbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
