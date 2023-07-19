import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
})
export class HomePageComponent {
	form = this.formBuilder.group({
		communications: [[]],
	});

	public constructor(private readonly formBuilder: UntypedFormBuilder) {}
}
