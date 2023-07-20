import { Injectable, InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>('local-storage');

@Injectable()
export class LocalStorageService {
	setItem(key: string, data: string): void {
		localStorage.setItem(key, data);
	}

	getItem(key: string): string | null {
		return localStorage.getItem(key);
	}

	removeItem(key: string): void {
		localStorage.removeItem(key);
	}

	clear(): void {
		localStorage.clear();
	}
}
