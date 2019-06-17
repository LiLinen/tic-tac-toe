import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import gameReducer from './reducers';
import aiListener from '../ai';

const store = createStore(gameReducer, composeWithDevTools());

store.subscribe(aiListener(store));

export default store;
