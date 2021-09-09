import { UPDATE_TITLE, ADD_QUESTION, CLEAR_QUESTIONS, REMOVE_QUESTION } from '../actionsTypes';
import { ANSWER_TYPES } from '../../constants';

const DEFAULT_STATE = {
    title: 'Some Title',
    questions: [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case UPDATE_TITLE: {
            return {
                ...state,
                title: action.payload,
            };
        }
        case ADD_QUESTION: {
            const question = {
                text: action.payload.text,
                answerType: action.payload.answerType,
                id: Date.now(),
            };

            if (!question.text || !ANSWER_TYPES.hasOwnProperty(question.answerType)) {
                return state;
            }

            return {
                ...state,
                questions: [
                    ...state.questions,
                    question
                ],
            }
        }
        case REMOVE_QUESTION: {
            const questions = [...state.questions];
            const targetIndex = questions.findIndex((x) => x.id === action.payload);

            questions.splice(targetIndex, 1);

            return {
                ...state,
                questions,
            }
        }
        case CLEAR_QUESTIONS: {
            return {
                ...state,
                questions: [],
            }
        }
        default: {
            return state;
        }
    }
}
