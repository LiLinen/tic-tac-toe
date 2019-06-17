import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { GAME_IN_PROGRESS, GAME_INIT, GAME_OVER, GAME_START } from '../../store/constants';
import { GameStates } from '../../store/types';
import { Player } from '../../game/types';
import { StyleRules } from '@material-ui/core/styles';

interface InformationBoardProps {
    state: GameStates;
    currentPlayer: Player;
    winner: Player | null;
}

const useStyles = makeStyles(
    (theme): StyleRules<string, {}> => ({
        info: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
        },
    }),
);

export const InformationBoard: React.FC<InformationBoardProps> = (props): React.ReactElement => {
    const { state, currentPlayer, winner } = props;

    const classes = useStyles();

    const renderInformationText = (): string => {
        switch (state) {
            case GAME_INIT:
                return 'Start The Game!';
            case GAME_START:
            case GAME_IN_PROGRESS:
                return `Current Player: ${currentPlayer.symbol}`;
            case GAME_OVER:
                return winner !== null ? `${winner.symbol} has won!` : `Draw!`;
            default:
                return '';
        }
    };

    return (
        <Container maxWidth="xs" className={classes.info}>
            <Typography component="p" variant="h5" align="center">
                {renderInformationText()}
            </Typography>
        </Container>
    );
};

export default InformationBoard;
