import { deepMerge } from '../';

describe('deepMerge', () => {
	it('should merge two objects', () => {
		expect(deepMerge({ a: 1, b: 2 }, { a: 2 })).toEqual({ a: 2, b: 2 });
	});
});
