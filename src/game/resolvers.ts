import { Board, PlayerSymbol } from './types';
import { BLANK, CROSS, NOUGHT } from './constants';

export const winPositions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
];

export const hasPlayerWon = (board: Board): boolean => {
    for (let winPosition of winPositions) {
        const [x, y, z] = winPosition;

        const valX = board[x[0]][x[1]];
        const valY = board[y[0]][y[1]];
        const valZ = board[z[0]][z[1]];

        if (valX === valY && valY === valZ && valX !== BLANK) {
            return true;
        }
    }

    return false;
};

export const isDraw = (board: Board): boolean => {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
};

export const isGameOver = (board: Board): boolean => hasPlayerWon(board) || isDraw(board);

export const nextSymbol = (symbol: PlayerSymbol): PlayerSymbol => (symbol === CROSS ? NOUGHT : CROSS);
