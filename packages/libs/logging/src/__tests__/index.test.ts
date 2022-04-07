import { createLogger } from '..';
import createDebugLogger from 'debug';

// Mock the "debug" module
jest.mock('debug');

describe('createLogger', () => {
	it('should return a debug logger', () => {
		createLogger('test');

		expect(createDebugLogger).toHaveBeenCalledWith('test');
	});
});
