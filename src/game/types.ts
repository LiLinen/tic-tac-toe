import * as c from './constants';

export type BoardPosition = 0 | 1 | 2;

export interface Move {
    row: BoardPosition;
    col: BoardPosition;
}

export type CellStates = typeof c.BLANK | typeof c.CROSS | typeof c.NOUGHT;

export type Board = CellStates[][];

export type PlayerSymbol = typeof c.CROSS | typeof c.NOUGHT;

export interface Player {
    symbol: PlayerSymbol;
}
