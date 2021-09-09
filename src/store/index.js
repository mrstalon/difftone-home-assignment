import { createStore, combineReducers } from 'redux';

import { questionnaireReducer, answerReducer } from './reducers';

const reducer = combineReducers({
    questionnaire: questionnaireReducer,
    answer: answerReducer,
});

const store = createStore(reducer);

export default store;
export * from './actionsTypes';
export * from './actions';
export * from './selectors';
