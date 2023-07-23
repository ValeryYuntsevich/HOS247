import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Login } from '@core/models';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	login(loginData: Login): Observable<{ token: string }> {
		return of({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' });
	}
}
