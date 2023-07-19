// --- node_modules --- //
import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { ICONS_LIST } from './configs/icons.config';

@NgModule({
	imports: [MatIconModule, HttpClientModule],
})
export class IconModule {
	public constructor(
		private readonly domSanitizer: DomSanitizer,
		private readonly matIconRegistry: MatIconRegistry,
	) {
		ICONS_LIST.forEach(([iconName, iconPath]) => {
			this.matIconRegistry.addSvgIcon(iconName, this.setPath(iconPath));
		});
	}

	private setPath(url: string): SafeResourceUrl {
		return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
