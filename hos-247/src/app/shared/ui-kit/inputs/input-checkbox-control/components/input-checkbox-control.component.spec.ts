import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxControlComponent } from './input-checkbox-control.component';

describe('InputCheckboxControlComponent', () => {
	let component: InputCheckboxControlComponent;
	let fixture: ComponentFixture<InputCheckboxControlComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputCheckboxControlComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(InputCheckboxControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
