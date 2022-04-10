import merge from 'ts-deepmerge';

/**
 * Merges two objects or more objects deeply
 *
 * @export
 * @template T The type of the objects to merge
 * @param {T} target The target object
 * @param {...Partial<T>[]} sources The source objects
 * @return {T} The merged object
 */
export function deepMerge<T extends Record<string, any>>(
	target: T,
	...sources: Partial<T>[]
): T {
	return merge(target, ...sources) as T;
}
