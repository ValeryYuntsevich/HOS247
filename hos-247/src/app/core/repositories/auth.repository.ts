import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { IRegisterData } from '../../features/public/auth/models';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { EnvironmentRepository, RequestRepository } from '@core/repositories';

// https://www.djamware.com/post/5f8f99673b3daf2033c40cac/angular-10-tutorial-oauth2-login-and-refresh-token

// const OAUTH_CLIENT = 'express-client';
// const OAUTH_SECRET = 'express-secret';
// const API_URL = 'http://localhost:3000/';
// const HTTP_OPTIONS = {
// 	headers: new http.HttpHeaders({
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 		Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET),
// 	}),
// };

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	redirectUrl = '';

	private readonly baseUrl = `${this.environmentRepository.baseUrl}/auth`;

	// private static handleError(error: http.HttpErrorResponse): any {
	// 	if (error.error instanceof ErrorEvent) {
	// 		console.error('An error occurred:', error.error.message);
	// 	} else {
	// 		console.error(
	// 			`Backend returned code ${error.status}, ` + `body was: ${error.error}`,
	// 		);
	// 	}
	// 	return throwError('Something bad happened; please try again later.');
	// }

	// private static log(message: string): any {
	// 	console.log(message);
	// }

	public constructor(
		private readonly requestRepository: RequestRepository,
		private readonly environmentRepository: EnvironmentRepository,
	) {} //  // private readonly http: http.HttpClient, // private readonly tokenService: core_helpers.TokenService, // @core.Inject(core_helpers.TOKEN)

	// public login(loginData: core_models.Login): Observable<http.HttpEvent<any>> {
	// 	return this.requestRepository.post('auth/sign-in', loginData).pipe(
	// 		tap(() => this.logout()),
	// 		tap((res: any) => {
	// 			this.tokenService.saveToken(res.access_token);
	// 			this.tokenService.saveRefreshToken(res.refresh_token);
	// 		}),
	// 	);
	// }

	// public refreshToken(refreshData: any): Observable<any> {
	// 	this.logout();
	// 	const body = new http.HttpParams()
	// 		.set('refresh_token', refreshData.refresh_token)
	// 		.set('grant_type', 'refresh_token');
	// 	return this.http
	// 		.post<any>(API_URL + 'oauth/token', body, HTTP_OPTIONS)
	// 		.pipe(
	// 			tap(res => {
	// 				this.tokenService.saveToken(res.access_token);
	// 				this.tokenService.saveRefreshToken(res.refresh_token);
	// 			}),
	// 			// catchError(AuthService.handleError),
	// 		);
	// }

	// public logout(): void {
	// 	this.tokenService.removeToken();
	// 	this.tokenService.removeRefreshToken();
	// }

	public register(registerData: IRegisterData): Observable<HttpEvent<boolean>> {
		return this.requestRepository.post(`${this.baseUrl}/sign-up`, registerData);
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

	// checker(userExistenceFilter: IUserExistenceFilter): Observable<boolean> {
	//   return this.http.head<boolean>(this.baseUrl, { params: { ...userExistenceFilter } }).pipe(
	//     map(() => true),
	//     catchError((error: HttpErrorResponse) => {
	//       if (error.status === 404) {
	//         return of(false);
	//       }
	//       throw error;
	//     })
	//   );
	// }
}
