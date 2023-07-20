import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { EnvironmentRepository, RequestRepository } from '@core/repositories';
import { Login } from '@core/models';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	redirectUrl = '';

	private readonly baseUrl = `${this.environmentRepository.baseUrl}/auth`;

	public constructor(
		private readonly requestRepository: RequestRepository,
		private readonly environmentRepository: EnvironmentRepository,
	) {}

	public login(loginData: Login): Observable<any> {
		return of(true);
	}

	public checkIfUsernameExists(username: string): Observable<boolean> {
		return of(username).pipe(
			map(username => {
				const usernames = ['admin', 'valery'];
				return usernames.includes(username);
			}),
		);
	}

	public checkIfEmailExists(email: string): Observable<boolean> {
		return of(email).pipe(
			map(email => {
				const emails = ['consult@zoaibkhan.com', 'zoaib@gmail.com'];
				return emails.includes(email);
			}),
		);
	}
}
