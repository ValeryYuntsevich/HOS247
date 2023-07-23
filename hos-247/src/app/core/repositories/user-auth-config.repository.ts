import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE, LocalStorageService } from './local-storage.repository';

@Injectable({
	providedIn: 'root',
})
export class UserAuthConfigRepository {
	private readonly userKey = 'token';

	constructor(
		@Inject(LOCAL_STORAGE)
		private readonly localStorageService: LocalStorageService,
	) {}

	setConfig(config: { token: string }): void {
		this.localStorageService.setItem(
			this.userKey,
			JSON.stringify({ ...config }),
		);
	}

	getConfig(): { token: string } {
		return JSON.parse(this.localStorageService.getItem(this.userKey) as string);
	}
}
