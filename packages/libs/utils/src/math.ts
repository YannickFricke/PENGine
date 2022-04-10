/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 *
 * @export
 * @param {number} min The minimum number
 * @param {number} max The maximum number
 * @return {number} A random integer between min (inclusive) and max (inclusive)
 */
export function getRandomBetween(min: number, max: number): number {
	// Calculate the range between min and max
	const range = max - min;

	// Calculate the random number
	// Math.random() returns a float between 0 and 1
	// We multiply it by the range to get a number between 0 and range
	const random = Math.random() * range;

	// Add the min to the random number to get a number between min and max
	return min + Math.floor(random);
}
