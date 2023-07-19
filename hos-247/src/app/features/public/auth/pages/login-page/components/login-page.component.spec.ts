import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent as LoginPagePageComponent } from './login-page.component';

describe('LoginPagePageComponent', () => {
	let component: LoginPagePageComponent;
	let fixture: ComponentFixture<LoginPagePageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginPagePageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginPagePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
