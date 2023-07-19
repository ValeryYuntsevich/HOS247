import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, retry } from 'rxjs';

// Source: https://javascript.plainenglish.io/handle-errors-in-angular-with-httpclient-and-rxjs-34cf631e29a6

/**
 * @description Request service for performs a requests.
 */
@Injectable({
	providedIn: 'root',
})
export class RequestRepository {
	private constructor(private readonly http: HttpClient) {}

	/**
	 * Performs a request with 'get' http method.
	 * @param url the url
	 * @param options the request options
	 * @returns Observable
	 */
	public get<T>(url: string, options?: any): Observable<HttpEvent<T>> {
		return this.http.get<T>(url, this.requestOptions(options)).pipe(retry(2));
	}

	/**
	 * Performs a request with 'post' http method.
	 * @param url the url
	 * @param options the request options
	 * @param body the body of request
	 * @returns Observable
	 */
	public post<T>(
		url: string,
		body: any | null,
		options?: any,
	): Observable<HttpEvent<T>> {
		return this.http
			.post<T>(url, body, this.requestOptions(options))
			.pipe(retry(2));
	}

	/**
	 * Performs a request with 'patch' http method.
	 * @param url the url
	 * @param options the request options
	 * @param body the body of request
	 * @returns Observable
	 */
	public patch<T>(
		url: string,
		body: any | null,
		options?: any,
	): Observable<HttpEvent<T>> {
		return this.http
			.patch<T>(url, body, this.requestOptions(options))
			.pipe(retry(2));
	}

	/**
	 * Performs a request with 'delete' http method.
	 * @param url the url
	 * @param options the request options
	 * @returns Observable
	 */
	public delete<T>(url: string, options?: any): Observable<HttpEvent<T>> {
		return this.http
			.delete<T>(url, this.requestOptions(options))
			.pipe(retry(2));
	}

	/**
	 * Request options.
	 * @param options the http options
	 * @returns RequestOptionsArgs
	 */
	private requestOptions(options: any): any {
		let tmpOptions = options;
		if (!tmpOptions) {
			tmpOptions = {};
		}

		let headers: HttpHeaders;
		if (tmpOptions.headers) {
			headers = tmpOptions.headers;
		} else {
			headers = new HttpHeaders();
		}

		if (!options || !options.isFile) {
			headers = headers.append('Content-type', 'application/json');
		}
		tmpOptions.headers = headers;
		return tmpOptions;
	}
}
