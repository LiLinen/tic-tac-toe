import * as constants from './constants';
import { GAME_INIT } from './constants';
import { GAME_START } from './constants';
import { GAME_IN_PROGRESS } from './constants';
import { GAME_OVER } from './constants';
import { Move } from '../game/types';
import { AiTypes } from '../ai/types';

export type GameStates = typeof GAME_INIT | typeof GAME_START | typeof GAME_IN_PROGRESS | typeof GAME_OVER;

export interface StartGameAction {
    type: typeof constants.GAME_START;
    ai: AiTypes | null;
}

export interface MoveAction {
    type: typeof constants.MOVE;
    payload: {
        move: Move;
    };
}

export interface RestartGameAction {
    type: typeof constants.GAME_RESTART;
}

export type GameActions = StartGameAction | MoveAction | RestartGameAction;
