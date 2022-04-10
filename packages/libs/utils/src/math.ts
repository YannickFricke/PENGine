/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 *
 * @export
 * @param {number} min The minimum number
 * @param {number} max The maximum number
 * @param {boolean} returnFloat If true, the result will be a float
 * @return {number} A random integer between min (inclusive) and max (inclusive)
 */
export function getRandomBetween(
	min: number,
	max: number,
	returnFloat: boolean = false,
): number {
	// Calculate the range between min and max
	const range = max - min;

	// Calculate the random number
	// Math.random() returns a float between 0 and 1
	// We multiply it by the range to get a number between 0 and range
	let random = Math.random() * range;

	// Check if we need to round the random number
	if (returnFloat === false) {
		// Round the random number
		random = Math.floor(random);
	}

	// Add the min to the random number to get a number between min and max
	return min + random;
}
