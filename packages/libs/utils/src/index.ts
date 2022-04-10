import merge from 'ts-deepmerge';

export function deepMerge<T extends Record<string, any>>(
	target: T,
	...sources: Partial<T>[]
): T {
	return merge(target, ...sources) as T;
}

deepMerge({ a: 1 }, { a: 2 });
