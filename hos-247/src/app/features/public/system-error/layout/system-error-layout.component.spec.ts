import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemErrorLayoutComponent } from './system-error-layout.component';

describe('ServerErrorLayoutComponent', () => {
	let component: SystemErrorLayoutComponent;
	let fixture: ComponentFixture<SystemErrorLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SystemErrorLayoutComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SystemErrorLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
