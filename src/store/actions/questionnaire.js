import { ADD_QUESTION, CLEAR_QUESTIONS, UPDATE_TITLE, REMOVE_QUESTION } from '../actionsTypes';

export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: question,
});

export const removeQuestion = (id) => ({
    type: REMOVE_QUESTION,
    payload: id,
});

export const clearQuestions = () => ({
    type: CLEAR_QUESTIONS,
});

export const updateTitle = (title) => ({
    type: UPDATE_TITLE,
    payload: title,
});
