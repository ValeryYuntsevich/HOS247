import * as forms from '@angular/forms';

import * as rxjs from 'rxjs';

import { AuthService } from '../../../../../core/repositories/auth.repository';

export class UniqueUsernameValidator {
	static usernameExists(authService: AuthService): forms.AsyncValidatorFn {
		return (
			control: forms.AbstractControl,
		): rxjs.Observable<forms.ValidationErrors | null> => {
			return rxjs
				.timer(500)
				.pipe(
					rxjs.concatMap(() =>
						authService
							.checkIfUsernameExists(control.value)
							.pipe(
								rxjs.map((result: boolean) =>
									result ? { usernameExist: true } : null,
								),
							),
					),
				) as rxjs.Observable<forms.ValidationErrors | null>;
		};
	}
}
