import { Ai } from './types';
import { MEDIUM_AI } from './constants';
import { Board, BoardPosition, CellStates, Move, Player, PlayerSymbol } from '../game/types';
import { hasPlayerWon, isGameOver, nextSymbol } from '../game/resolvers';
import { BLANK, NOUGHT } from '../game/constants';

const deepClone = (board: Board): Board => board.map((row): CellStates[] => row.slice());

const makeMove = (board: Board, move: Move, player: PlayerSymbol): Board => {
    const boardCopy = deepClone(board);

    boardCopy[move.row][move.col] = player;

    return boardCopy;
};

export const makeMiniMaxMove = (board: Board, player: Player): Move => {
    let bestMove: Move | null = null;

    const score = (board: Board, symbol: PlayerSymbol): 1 | 0 | -1 => {
        if (hasPlayerWon(board)) {
            return symbol === NOUGHT ? 1 : -1;
        }

        return 0;
    };

    const miniMax = (board: Board, player: PlayerSymbol): number | null => {
        if (isGameOver(board)) return score(board, player);

        let bestScore = -2;

        let rowIndex = 0;
        for (let row of board) {
            let colIndex = 0;
            for (let col of row) {
                if (col === BLANK) {
                    let newMove = {
                        row: rowIndex as BoardPosition,
                        col: colIndex as BoardPosition,
                    };

                    const movedBoard = makeMove(board, newMove, player);

                    const moveScore = miniMax(movedBoard, nextSymbol(player));

                    if (moveScore !== null && -moveScore > bestScore) {
                        bestScore = moveScore;
                        bestMove = newMove;
                    }
                }
                colIndex++;
            }
            rowIndex++;
        }

        return null;
    };

    miniMax(board, player.symbol);

    if (bestMove === null) {
        throw Error;
    }

    console.log(bestMove);
    return bestMove;
};

export const mediumAi: Ai = {
    type: MEDIUM_AI,
    makeMove: makeMiniMaxMove,
};

export default mediumAi;
