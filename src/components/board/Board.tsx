import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Cell from '../cell/Cell';
import { BoardPosition, Move } from '../../game/types';

interface BoardProps {
    onCellClick: (move: Move) => void;
    board: string[][];
    disabled: boolean;
}

const useStyles = makeStyles({
    board: {
        display: 'flex',
        borderRadius: 6,
    },
    cell: {
        flex: 3,
    },
    row: {
        margin: '0 auto',
    },
});

export const Board: React.FC<BoardProps> = (props): React.ReactElement => {
    const { board, onCellClick, disabled } = props;
    const classes = useStyles();

    const handleCellClick = (row: number, col: number): void => {
        onCellClick({
            row: row as BoardPosition,
            col: col as BoardPosition,
        });
    };

    return (
        <Box className={classes.board}>
            {board.map(
                (row, rowIndex): React.ReactElement => {
                    return (
                        <div key={'row-' + rowIndex} className={classes.row}>
                            {row.map(
                                (cell, colIndex): React.ReactElement => {
                                    return (
                                        <div key={'col-' + colIndex} className={classes.cell}>
                                            <Cell
                                                symbol={cell}
                                                disabled={disabled || cell !== ''}
                                                onClick={(): void => handleCellClick(rowIndex, colIndex)}
                                            />
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    );
                },
            )}
        </Box>
    );
};

export default Board;
