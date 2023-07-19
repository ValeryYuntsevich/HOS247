import * as core from '@angular/core';

import * as rxjs from 'rxjs';

import * as helpers from '@core/helpers';

@core.Component({
	selector: 'app-public-layout',
	templateUrl: './public-layout.component.html',
})
export class PublicLayoutComponent {
	public isThemeDark: rxjs.Observable<boolean> = this.themeService.isDarkTheme;

	public constructor(
		@core.Inject(helpers.THEMING)
		private readonly themeService: helpers.ThemingService,
	) {}
}
