import * as core from '@angular/core';
import * as router from '@angular/router';

import { InternalUrls } from '@core/models';

// Source: https://bobrov.dev/blog/angular-smart-404-page/

export const PATH_RESOLVE = new core.InjectionToken<
	router.Resolve<string | null>
>('path_resolve');

/**
 * @description PathResolve service.
 */
@core.Injectable()
export class PathResolveService implements router.Resolve<string | null> {
	public resolve(
		route: router.ActivatedRouteSnapshot,
		state: router.RouterStateSnapshot,
	): string | null {
		const typoPath = state.url.replace('/', '');
		const threshold = this.getThreshold(typoPath);
		const dictionary = Object.values(InternalUrls).filter(
			path => Math.abs(path.length - typoPath.length) < threshold,
		);
		if (!dictionary.length) return null;
		this.sortByDistances(typoPath, dictionary);
		return `${dictionary[0]}`;
	}
	/**
	 * Get Threshold.
	 * @param path the typing url
	 * @returns Void
	 */
	private getThreshold = (path: string): number => (path.length < 5 ? 3 : 5);
	/**
	 * Sort the dictionary by the Levenshtein distance to the input value.
	 * @param typoPath the typing url
	 * @param dictionary the dictionary with urls
	 * @returns Void
	 */
	private sortByDistances(typoPath: string, dictionary: string[]): void {
		const pathsDistance = {} as { [name: string]: number };

		dictionary.sort((a, b) => {
			if (!(a in pathsDistance)) {
				pathsDistance[a] = this.levenshtein(a, typoPath);
			}
			if (!(b in pathsDistance)) {
				pathsDistance[b] = this.levenshtein(b, typoPath);
			}

			return pathsDistance[a] - pathsDistance[b];
		});
	}
	/**
	 * // Source: https://itnext.io/levenshtein-distance-in-typescript-6de81ea2fb63
	 * Levenshtein distance algorithm..
	 * @param a the length
	 * @param b the length
	 * @returns Number
	 */
	private levenshtein(a: string, b: string): number {
		if (a.length == 0) {
			return b.length;
		}
		if (b.length == 0) {
			return a.length;
		}

		const matrix = [];

		for (let i = 0; i <= b.length; i++) {
			matrix[i] = [i];
		}

		for (let j = 0; j <= a.length; j++) {
			matrix[0][j] = j;
		}

		for (let i = 1; i <= b.length; i++) {
			for (let j = 1; j <= a.length; j++) {
				if (b.charAt(i - 1) == a.charAt(j - 1)) {
					matrix[i][j] = matrix[i - 1][j - 1];
				} else {
					matrix[i][j] = Math.min(
						matrix[i - 1][j - 1] + 1,
						matrix[i][j - 1] + 1,
						matrix[i - 1][j] + 1,
					);
				}
			}
		}

		return matrix[b.length][a.length];
	}
}
