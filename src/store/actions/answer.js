import { INIT_ANSWERS, UPDATE_ANSWER, CLEAR_ANSWERS } from '../actionsTypes';

export const initAnswers = (questions) => ({
    type: INIT_ANSWERS,
    payload: questions,
});

export const clearAnswers = () => ({
    type: CLEAR_ANSWERS,
});

export const updateAnswer = (payload) => ({
    type: UPDATE_ANSWER,
    payload,
});
