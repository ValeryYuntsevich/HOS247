import * as core_models from '@core/models';

const usernameFormControl: core_models.TMatFormFieldControl = {
	label: 'register.username.label',
	hint: '',
	propertyName: 'username',
	placeholder: 'register.username.placeholder',
	type: 'text',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'register.username.errorRequiredUsernameMessage',
		usernameExist: 'register.username.errorUsernameExistMessage',
	},
};

const emailFormControl: core_models.TMatFormFieldControl = {
	label: 'register.email.label',
	hint: '',
	propertyName: 'email',
	placeholder: 'register.email.placeholder',
	type: 'email',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'register.email.errorRequiredEmailMessage',
		invalidEmail: 'register.email.errorInvalidEmailMessage',
		emailExist: 'register.email.errorEmailExistMessage',
	},
};

const passwordFormControl: core_models.TMatFormFieldControl = {
	label: 'register.password.label',
	hint: '',
	propertyName: 'password',
	placeholder: 'register.password.placeholder',
	type: 'password',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'register.password.errorRequiredPasswordMessage',
		invalidPassword: 'register.password.errorInvalidPasswordMessage',
	},
};

const confirmPasswordFormControl: core_models.TMatFormFieldControl = {
	label: 'register.confirmPassword.label',
	hint: '',
	propertyName: 'confirmPassword',
	placeholder: 'register.confirmPassword.placeholder',
	type: 'password',
	appearance: 'legacy',
	validatorErrorMessage: {
		required: 'register.confirmPassword.errorRequiredPasswordMessage',
		invalidPassword: 'register.confirmPassword.errorInvalidPasswordMessage',
	},
};

const registerButton: core_models.TButton = {
	text: 'register.button.signUp',
	type: 'submit',
	styles: {
		width: '100%',
	},
};

const googleButton: core_models.TButton = {
	text: 'register.button.loginWithGoogle',
	type: 'button',
	styles: {
		width: '100%',
	},
	icon: {
		text: 'google',
		styles: {},
	},
};

export const REGISTER_CONFIG = {
	control: {
		email: emailFormControl,
		username: usernameFormControl,
		password: passwordFormControl,
		confirmPassword: confirmPasswordFormControl,
	},
	button: {
		register: registerButton,
		google: googleButton,
	},
};
