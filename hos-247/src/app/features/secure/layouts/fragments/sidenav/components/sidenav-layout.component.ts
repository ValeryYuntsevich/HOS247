import * as core from '@angular/core';

import { Observable, of } from 'rxjs';

import { PUBLIC_MENU_LIST } from '@core/helpers';
import { IPublicMenu } from '@core/models';

@core.Component({
	selector: 'app-sidenav-layout',
	templateUrl: './sidenav-layout.component.html',
	changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class SidenavLayoutComponent {
	menuList: Observable<IPublicMenu[]> = of(PUBLIC_MENU_LIST);
}
