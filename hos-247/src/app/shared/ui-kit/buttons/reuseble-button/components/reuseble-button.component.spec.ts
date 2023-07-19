import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusebleButtonComponent } from './reuseble-button.component';

describe('ReusebleButtonComponent', () => {
  let component: ReusebleButtonComponent;
  let fixture: ComponentFixture<ReusebleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusebleButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusebleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
