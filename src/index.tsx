import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';
import 'typeface-roboto';

import store from './store';
import GameContainer from './containers/game-container/GameContainer';

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <GameContainer />
    </Provider>,
    document.getElementById('root'),
);
