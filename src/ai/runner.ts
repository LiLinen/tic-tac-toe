import { Store } from 'redux';

import { Ai } from './types';
import { GameState } from '../store/reducers';
import { move } from '../store/actions';
import { GAME_IN_PROGRESS } from '../store/constants';
import { NOUGHT } from '../game/constants';

export const canAiAct = (ai: Ai, state: GameState): boolean => {
    return (
        state.gameState === GAME_IN_PROGRESS &&
        ai.type === state.ai &&
        state.currentPlayer !== null &&
        state.currentPlayer.symbol === NOUGHT
    );
};

export const runAi = (ai: Ai, store: Store): void => {
    const state: GameState = store.getState();

    if (canAiAct(ai, state)) {
        setTimeout((): void => {
            store.dispatch(move(ai.makeMove(state.board.slice(), state.currentPlayer)));
        }, 200);
    }
};
