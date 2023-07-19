import * as core from '@angular/core';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as http from '@angular/common/http';

import * as rxjs from 'rxjs';

import * as core_helpers from '@core/helpers';
import * as core_models from '@core/models';

import * as validators from '@features/public/auth/utils';

import { AuthService } from '@core/repositories/auth.repository';
import * as configs from '../../../configs';

@core.Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
})
export class RegisterPageComponent implements core.OnInit, core.OnDestroy {
	public registerFormGroup = new forms.UntypedFormGroup({});
	public registerFormSubmitted = false;

	readonly main = configs.REGISTER_CONFIG;
	readonly internalUrls = core_models.InternalUrls;

	private readonly subscriptions = new rxjs.Subscription();

	public constructor(
		@core.Inject(core_helpers.SEO)
		private readonly seoService: core_helpers.SeoService,
		private readonly formBuilder: forms.UntypedFormBuilder,
		private readonly authService: AuthService,
		private readonly router: router.Router,
	) {
		this.seoService.setupRouterListeners();
	}

	public ngOnInit(): void {
		this.createLoginForm();
	}

	public onSubmit({ username, email, password }: core_models.Register): void {
		this.registerFormSubmitted = true;
		if (username && password && email) {
			const subscription = this.authService
				.register({ password, email, username })
				.pipe(
					rxjs.catchError((error: http.HttpErrorResponse) => {
						throw new Error(error.message);
					}),
					rxjs.finalize(() => (this.registerFormSubmitted = false)),
				)
				.subscribe(() => this.router.navigate([this.internalUrls.Login]));
			this.subscriptions.add(subscription);
		} else {
			this.registerFormSubmitted = false;
		}
	}

	public get password(): forms.UntypedFormControl {
		return this.registerFormGroup.controls[
			this.main.control.password.propertyName
		] as forms.UntypedFormControl;
	}

	private createLoginForm(): void {
		this.registerFormGroup = this.formBuilder.group(
			{
				[this.main.control.username.propertyName]: [
					'',
					{
						validators: forms.Validators.compose([forms.Validators.required]),
						asyncValidators: validators.UniqueUsernameValidator.usernameExists(
							this.authService,
						),
						updateOn: 'blur',
					},
				],
				[this.main.control.email.propertyName]: [
					'',
					{
						validators: forms.Validators.compose([
							forms.Validators.required,
							validators.EmailValidator.validEmail(),
						]),
						asyncValidators: validators.UniqueEmailValidator.emailExists(
							this.authService,
						),
						updateOn: 'blur',
					},
				],
				[this.main.control.password.propertyName]: [
					'',
					{
						validators: forms.Validators.compose([
							validators.PasswordValidator.validPassword(true),
							forms.Validators.required,
						]),
						updateOn: 'blur',
					},
				],
				[this.main.control.confirmPassword.propertyName]: [
					'',
					{
						validators: forms.Validators.compose([forms.Validators.required]),
						updateOn: 'blur',
					},
				],
			},
			{
				validators: forms.Validators.compose([
					validators.MatchFieldValidator.validFieldMatch(
						this.main.control.password.propertyName,
						this.main.control.confirmPassword.propertyName,
					),
				]),
			},
		);
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
