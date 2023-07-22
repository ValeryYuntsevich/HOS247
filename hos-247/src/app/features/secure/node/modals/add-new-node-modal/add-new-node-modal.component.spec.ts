import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNodeModalComponent } from './add-new-node-modal.component';

describe('AddNewNodeModalComponent', () => {
	let component: AddNewNodeModalComponent;
	let fixture: ComponentFixture<AddNewNodeModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddNewNodeModalComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddNewNodeModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
