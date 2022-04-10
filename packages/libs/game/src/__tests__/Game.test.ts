import { Game } from '../Game';

describe('Game', () => {
	describe('2D', () => {
		it('should be initializable', () => {
			expect(
				Game.createTwoDimensional({
					width: 800,
					height: 600,
				}) instanceof Game,
			).toBeTruthy();
		});
	});

	describe('3D', () => {
		it('should be initializable', () => {
			expect(
				Game.createThreeDimensional({
					width: 800,
					height: 600,
				}) instanceof Game,
			).toBeTruthy();
		});
	});
});
