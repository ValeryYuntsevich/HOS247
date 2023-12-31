import { TButton } from '@core/models';

export const BUTTON_HOME_CONFIG: TButton = {
	text: 'Go back',
	type: 'button',
	styles: {
		width: 'clamp(288px, 35%, 288px)',
	},
};

export const CONFIG = {
	button: {
		home: BUTTON_HOME_CONFIG,
	},
};
