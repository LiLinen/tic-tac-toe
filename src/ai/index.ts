import { Store } from 'redux';
import { Ai } from './types';
import { runAi } from './runner';

import easyAi from './easy';
import mediumAi from './medium';

export const getAis = (): Ai[] => {
    return [easyAi, mediumAi];
};

export const aiListener = (store: Store): (() => void) => {
    return (): void => {
        getAis().map((ai): void => {
            return runAi(ai, store);
        });
    };
};

export default aiListener;
