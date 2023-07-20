import * as core from '@angular/core';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as http from '@angular/common/http';

import * as rxjs from 'rxjs';

import * as core_models from '@core/models';
import * as core_helpers from '@core/helpers';

import * as repositories from '@core/repositories';
import { EmailValidator } from '@features/public/auth/utils';
import { AuthService } from '@core/repositories/auth.repository';
import { CONFIG } from '../../../configs';

@core.Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements core.OnInit, core.OnDestroy {
	public loginFormGroup = new forms.UntypedFormGroup({});

	public loginFormSubmitted = false;

	readonly emailPropertyName = 'email';
	readonly passwordPropertyName = 'password';

	readonly config = CONFIG;
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

	public onSubmit({ password, email }: core_models.Login): void {
		this.loginFormSubmitted = true;
		if (password && email) {
			const subscription = this.authService
				.login({ password, email })
				.pipe(
					rxjs.catchError((error: http.HttpErrorResponse) => {
						throw new Error(error.message);
					}),
					rxjs.finalize(() => (this.loginFormSubmitted = false)),
				)
				.subscribe(() => {
					this.router.navigate(['/secure/node']);
				});
			this.subscriptions.add(subscription);
		} else {
			this.loginFormSubmitted = false;
		}
	}

	public get email(): forms.UntypedFormControl {
		return this.loginFormGroup.controls[
			this.emailPropertyName
		] as forms.UntypedFormControl;
	}

	public get password(): forms.UntypedFormControl {
		return this.loginFormGroup.controls[
			this.passwordPropertyName
		] as forms.UntypedFormControl;
	}

	private createLoginForm(): void {
		this.loginFormGroup = this.formBuilder.group({
			[this.emailPropertyName]: [
				'',
				{
					validators: forms.Validators.compose([
						forms.Validators.required,
						EmailValidator.validEmail(),
					]),
					updateOn: 'blur',
				},
			],
			[this.passwordPropertyName]: [
				'',
				{
					validators: forms.Validators.compose([forms.Validators.required]),
					updateOn: 'blur',
				},
			],
		});
	}

	public ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
