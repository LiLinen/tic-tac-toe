import * as t from './types';
import * as c from './constants';
import { Move } from '../game/types';
import { AiTypes } from '../ai/types';

export const startGame = (aiType: AiTypes | null): t.StartGameAction => ({ type: c.GAME_START, ai: aiType });

export const restartGame = (): t.RestartGameAction => ({ type: c.GAME_RESTART });

export const move = (move: Move): t.MoveAction => ({
    type: c.MOVE,
    payload: {
        move: move,
    },
});
