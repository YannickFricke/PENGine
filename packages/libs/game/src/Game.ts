import { Dimensions } from './Dimensions';
import { createLogger } from '@pengine/logging';

/**
 * Defines the basic game options which are extended by the dimensional game options.
 *
 * ATTENTION: You should never rely directly on this interface!
 */
export type BaseGameOptions = {
	/**
	 * The width of the game
	 *
	 * @type {number}
	 */
	width: number;

	/**
	 * The height of the game
	 *
	 * @type {number}
	 */
	height: number;
};

/**
 * Defines the game options which are needed for creating a two dimensional game
 */
export type TwoDimensionalGameOptions = {
	dimensions: Dimensions.Two;
} & BaseGameOptions;

/**
 * Defines the game options which are needed for creating a three dimensional game
 */
export type ThreeDimensionalGameOptions = {
	dimensions: Dimensions.Three;
} & BaseGameOptions;

/**
 * Combines all dimensional game options
 */
export type GameOptions =
	| TwoDimensionalGameOptions
	| ThreeDimensionalGameOptions;

/**
 * Defines the options which are needed to initialize a new game
 */
export type CreateGameOptions = Omit<GameOptions, 'dimensions'>;

/**
 * Defines the game class
 *
 * @export
 * @class Game
 * @template Dimension The dimensions of the game
 */
export class Game<Dimension extends Dimensions> {
	/**
	 * The logger instance which is used to log messages
	 *
	 * @private
	 * @memberof Game
	 */
	private logger = createLogger(Game.name);

	/**
	 * Creates an instance of Game
	 *
	 * @param {GameOptions} gameOptions The options which are needed to initialize a new game
	 * @memberof Game
	 */
	protected constructor(gameOptions: GameOptions) {
		this.logger(`Creating new game instance`);
	}

	/**
	 * Creates a new two dimensional game
	 *
	 * @static
	 * @param {CreateGameOptions} gameOptions The options which are needed to initialize a new game
	 * @return {Game<Dimensions.Two>} The new two dimensional game
	 * @memberof Game
	 */
	public static createTwoDimensional(
		gameOptions: CreateGameOptions,
	): Game<Dimensions.Two> {
		return new Game({
			dimensions: Dimensions.Two,
			...gameOptions,
		});
	}

	/**
	 * Creates a new three dimensional game
	 *
	 * @static
	 * @param {CreateGameOptions} gameOptions The options which are needed to initialize a new game
	 * @return {Game<Dimensions.Three>} The new three dimensional game
	 * @memberof Game
	 */
	public static createThreeDimensional(
		gameOptions: CreateGameOptions,
	): Game<Dimensions.Three> {
		return new Game({
			dimensions: Dimensions.Three,
			...gameOptions,
		});
	}
}
