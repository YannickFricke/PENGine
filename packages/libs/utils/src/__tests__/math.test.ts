import { getRandomBetween } from '../math';

const withMockedRandom = (randomValue: number) => {
	return (assertations: () => void) => {
		const originalRandom = Math.random;

		Math.random = jest.fn(() => randomValue);
		assertations();
		expect(Math.random).toHaveBeenCalledTimes(1);

		Math.random = originalRandom;
	};
};

describe('getRandomBetween', () => {
	it('should return a random number betwen 1 and 10', () => {
		withMockedRandom(0.5)(() => {
			expect(getRandomBetween(1, 10)).toEqual(5);
		});
	});

	it('should return the min value when the random returns 0', () => {
		withMockedRandom(0)(() => {
			expect(getRandomBetween(1, 10)).toEqual(1);
		});
	});

	it('should return the max value when the random returns 1', () => {
		withMockedRandom(1)(() => {
			expect(getRandomBetween(1, 10)).toEqual(10);
		});
	});

	it('should return a float number when the returnFloat argument is true', () => {
		withMockedRandom(0.5)(() => {
			expect(getRandomBetween(25, 50, true)).toEqual(37.5);
		});
	});
});
