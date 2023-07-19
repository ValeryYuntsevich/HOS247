import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordControlComponent } from './input-password-control.component';

describe('InputPasswordControlComponent', () => {
	let component: InputPasswordControlComponent;
	let fixture: ComponentFixture<InputPasswordControlComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputPasswordControlComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputPasswordControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
