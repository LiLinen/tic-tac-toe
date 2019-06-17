import { Ai } from './types';
import { EASY_AI } from './constants';
import { Board, BoardPosition, Move } from '../game/types';
import { BLANK } from '../game/constants';

export const makeRandomMove = (board: Board): Move => {
    const createRandomMove = (): Move => {
        const randPosition = (): BoardPosition => {
            return Math.floor(Math.random() * 3) as BoardPosition;
        };

        return { row: randPosition(), col: randPosition() };
    };

    let move = createRandomMove();

    if (board[move.row][move.col] === BLANK) {
        return move;
    }

    return makeRandomMove(board);
};

export const easyAi: Ai = {
    type: EASY_AI,
    makeMove: makeRandomMove,
};

export default easyAi;
