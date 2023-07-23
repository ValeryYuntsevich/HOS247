import * as core_models from '@core/models';

export const EMAIL_CONTROL_CONFIG: core_models.TMatFormFieldControl = {
	label: 'login.email.label',
	hint: '',
	propertyName: 'string',
	placeholder: 'login.email.placeholder',
	type: 'email',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'login.email.errorRequiredEmailMessage',
		invalidEmail: 'login.email.errorInvalidEmailMessage',
	},
};

export const PASSWORD_CONTROL_CONFIG: core_models.TMatFormFieldControl = {
	label: 'login.password.label',
	hint: '',
	propertyName: 'string',
	placeholder: 'login.password.placeholder',
	type: 'password',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'login.password.errorRequiredPasswordMessage',
		invalidPassword: 'login.password.errorInvalidPasswordMessage',
	},
};

export const SUBMIT_BUTTON_CONFIG: core_models.TButton = {
	text: 'login.button.signIn',
	type: 'submit',
	styles: {
		width: '100%',
	},
};

export const CONFIG = {
	control: {
		email: EMAIL_CONTROL_CONFIG,
		password: PASSWORD_CONTROL_CONFIG,
	},
	button: {
		login: SUBMIT_BUTTON_CONFIG,
	},
};
