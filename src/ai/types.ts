import { EASY_AI, MEDIUM_AI } from './constants';
import { Board, Move, Player } from '../game/types';

export type AiTypes = typeof EASY_AI | typeof MEDIUM_AI;

export interface Ai {
    type: AiTypes;
    makeMove: (board: Board, currentPlayer: Player) => Move;
}
