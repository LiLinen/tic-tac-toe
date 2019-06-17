import { connect } from 'react-redux';

import { startGame, move, restartGame } from '../../store/actions';
import { GameState } from '../../store/reducers';
import { Game } from '../../components/game/Game';
import { GameStates, MoveAction, RestartGameAction, StartGameAction } from '../../store/types';
import { Board, Move, Player } from '../../game/types';
import { AiTypes } from '../../ai/types';

interface StateFromProps {
    state: GameStates;
    board: Board;
    currentPlayer: Player;
    winner: Player | null;
}

const mapStateToProps = (state: GameState): StateFromProps => ({
    state: state.gameState,
    board: state.board,
    currentPlayer: state.currentPlayer,
    winner: state.winner,
});

interface DispatchFromProps {
    onCellClick: (m: Move) => MoveAction;
    startGame: (aiType: AiTypes | null) => StartGameAction;
    restartGame: () => RestartGameAction;
}

const dispatchProps: DispatchFromProps = {
    onCellClick: move,
    startGame: startGame,
    restartGame: restartGame,
};

export default connect(
    mapStateToProps,
    dispatchProps,
)(Game);
