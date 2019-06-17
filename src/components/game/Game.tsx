import React from 'react';
import Button from '@material-ui/core/Button';
import Board from '../board/Board';
import { GameStates } from '../../store/types';
import { Move, Board as BoardType, Player } from '../../game/types';
import { GAME_INIT, GAME_OVER } from '../../store/constants';
import { Container, makeStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

import Title from '../title/Title';
import Footer from '../footer/Footer';
import InformationBoard from '../information-board/InformationBoard';
import { AiTypes } from '../../ai/types';
import { EASY_AI, MEDIUM_AI } from '../../ai/constants';

export interface GameProps {
    state: GameStates;
    board: BoardType;
    onCellClick: (move: Move) => void;
    currentPlayer: Player;
    winner: Player | null;
    startGame: (aiType: AiTypes | null) => void;
    restartGame: () => void;
}

const useStyles = makeStyles(
    (theme): StyleRules<string, {}> => ({
        '@global': {
            body: {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#CAEBF2',
            },
        },
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        container: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(2),
        },
        startButton: {
            margin: theme.spacing(1),
            color: '#CAEBF2',
            backgroundColor: '#FF3B3F',
        },
        restartButton: {
            color: '#FF3B3F',
            backgroundColor: '#CAEBF2',
        },
        actionContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

export const Game: React.FC<GameProps> = (props): React.ReactElement => {
    const { state, board, currentPlayer, onCellClick, startGame, winner, restartGame } = props;
    const classes = useStyles();

    const renderBoard = (): React.ReactElement | null => {
        if (state === GAME_INIT) {
            return null;
        }

        return (
            <Container maxWidth="xs">
                <Board board={board} disabled={state === GAME_OVER} onCellClick={onCellClick} />
            </Container>
        );
    };

    const renderGameStartOptions = (): React.ReactElement => {
        return (
            <div>
                <Button
                    href=""
                    className={classes.startButton}
                    variant="contained"
                    onClick={(): void => startGame(null)}
                >
                    Hotseat
                </Button>
                <Button
                    href=""
                    className={classes.startButton}
                    variant="contained"
                    onClick={(): void => startGame(EASY_AI)}
                >
                    Easy AI
                </Button>
                <Button
                    href=""
                    className={classes.startButton}
                    variant="contained"
                    onClick={(): void => startGame(MEDIUM_AI)}
                >
                    Medium AI
                </Button>
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="sm" className={classes.container}>
                <Title />

                <InformationBoard state={state} currentPlayer={currentPlayer} winner={winner} />

                <Container maxWidth="xs" className={classes.actionContainer}>
                    {state === GAME_INIT ? (
                        renderGameStartOptions()
                    ) : (
                        <Button
                            href=""
                            className={classes.restartButton}
                            variant="contained"
                            onClick={(): void => restartGame()}
                        >
                            RESTART
                        </Button>
                    )}
                </Container>

                {renderBoard()}
            </Container>
            <Footer />
        </div>
    );
};
