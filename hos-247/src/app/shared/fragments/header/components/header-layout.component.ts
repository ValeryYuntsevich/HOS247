import * as core from '@angular/core';

import * as helpers from '@core/helpers';

@core.Component({
	selector: 'app-header-layout',
	templateUrl: './header-layout.component.html',
	styleUrls: ['./header-layout.component.scss'],
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {
	public isThemeDark = false;

	public constructor(
		@core.Inject(helpers.THEMING)
		private readonly themeService: helpers.ThemingService,
	) {}

	public toggleDarkTheme(): void {
		this.isThemeDark = !this.isThemeDark;
		this.themeService.setDarkTheme(this.isThemeDark as boolean);
	}
}
