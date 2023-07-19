import { InjectionToken, Injectable } from '@angular/core';

export const TOKEN = new InjectionToken<any>('token');

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

/**
 * @description Token service for auth.
 */
@Injectable()
export class TokenService {
	/**
	 * Get users token.
	 * @returns string | null
	 */
	public getToken(): string | null {
		return localStorage.getItem(ACCESS_TOKEN);
	}
	/**
	 * Get users refresh token.
	 * @returns string | null
	 */
	public getRefreshToken(): string | null {
		return localStorage.getItem(REFRESH_TOKEN);
	}
	/**
	 * Save users token.
	 * @param token the acces token
	 * @returns void
	 */
	public saveToken(token: string): void {
		localStorage.setItem(ACCESS_TOKEN, token);
	}
	/**
	 * Save users refresh token.
	 * @param refreshToken the refresh token
	 * @returns void
	 */
	public saveRefreshToken(refreshToken: string): void {
		localStorage.setItem(REFRESH_TOKEN, refreshToken);
	}
	/**
	 * Remove users token.
	 * @returns void
	 */
	public removeToken(): void {
		localStorage.removeItem(ACCESS_TOKEN);
	}
	/**
	 * Remove users refresh token.
	 * @returns void
	 */
	public removeRefreshToken(): void {
		localStorage.removeItem(REFRESH_TOKEN);
	}
}
