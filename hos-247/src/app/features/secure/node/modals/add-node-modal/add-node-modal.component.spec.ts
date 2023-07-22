import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodeModalComponent } from './add-node-modal.component';

describe('AddNodeModalComponent', () => {
	let component: AddNodeModalComponent;
	let fixture: ComponentFixture<AddNodeModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddNodeModalComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddNodeModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
