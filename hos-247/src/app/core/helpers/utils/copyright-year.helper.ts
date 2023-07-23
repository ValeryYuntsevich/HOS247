interface Constants {
	initialCopyrightYear: number;
}

export const CONSTANTS: Constants = {
	initialCopyrightYear: 2023,
};

export class CopyrightYear {
	/**
	 * Displays the original copyright year or the range from that year to the current year.
	 */
	static getCopyrightYear(): string {
		return CONSTANTS.initialCopyrightYear >= new Date().getFullYear()
			? `${new Date().getFullYear()}`
			: `${CONSTANTS.initialCopyrightYear} - ${new Date().getFullYear()}`;
	}
}
