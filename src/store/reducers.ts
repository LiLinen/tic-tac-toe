import { GameActions, MoveAction, GameStates, StartGameAction } from './types';
import * as c from './constants';
import { hasPlayerWon, isDraw } from '../game/resolvers';
import { AiTypes } from '../ai/types';
import { Board, CellStates, Player } from '../game/types';
import { BLANK, CROSS, NOUGHT } from '../game/constants';

export type GameState = Readonly<{
    gameState: GameStates;
    ai: AiTypes | null;
    currentPlayer: Player;
    winner: Player | null;
    board: Board;
}>;

const initializeBoard = (): CellStates[][] => {
    return [[BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK], [BLANK, BLANK, BLANK]];
};

const initialState: GameState = {
    gameState: c.GAME_INIT,
    currentPlayer: { symbol: CROSS },
    winner: null,
    board: initializeBoard(),
    ai: null,
};

export const gameStartReducer = (state: GameState, action: StartGameAction): GameState => {
    return {
        ...state,
        gameState: c.GAME_START,
        ai: action.ai,
    };
};

export const moveReducer = (state: GameState, action: MoveAction): GameState => {
    const move = action.payload.move;
    const slice = state.board.slice();
    const currentPlayer = state.currentPlayer;

    slice[move.row][move.col] = currentPlayer.symbol;

    const newState = {
        ...state,
        board: slice,
    };

    if (hasPlayerWon(slice)) {
        return {
            ...newState,
            gameState: c.GAME_OVER,
            winner: currentPlayer,
        };
    }

    if (isDraw(slice)) {
        return {
            ...newState,
            gameState: c.GAME_OVER,
            winner: null,
        };
    }

    return {
        ...newState,
        gameState: c.GAME_IN_PROGRESS,
        currentPlayer: {
            symbol: currentPlayer.symbol === CROSS ? NOUGHT : CROSS,
        },
    };
};

export const gameReducer = (state: GameState = initialState, action: GameActions): GameState => {
    switch (action.type) {
        case c.GAME_START:
            return gameStartReducer(state, action);
        case c.MOVE:
            return moveReducer(state, action);
        case c.GAME_RESTART:
            return { ...initialState, board: initializeBoard() };
        default:
            return state;
    }
};

export default gameReducer;
