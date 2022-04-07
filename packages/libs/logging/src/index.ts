import createDebugLogger, { Debugger } from 'debug';

/**
 * Creates a debug logger with the given name.
 *
 * @export
 * @param {string} loggerName The name of the logger.
 * @return {Debugger} The debug logger.
 */
export function createLogger(loggerName: string): Debugger {
	return createDebugLogger(loggerName);
}
