import { INIT_ANSWERS, UPDATE_ANSWER, CLEAR_ANSWERS } from '../actionsTypes';

const DEFAULT_STATE = {
    answers: [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case INIT_ANSWERS: {
            const questions = action.payload;
            const answers = questions.map(({ text, id }) => ({
                question: text,
                id,
                answer: '',
            }));

            return {
                ...state,
                answers,
            };
        }
        case UPDATE_ANSWER: {
            const { text, id } = action.payload;
            const answers = [...state.answers];
            const targetIndex = answers.findIndex((x) => x.id === id);

            answers[targetIndex].answer = text;

            return {
                ...state,
                answers,
            }
        }
        case CLEAR_ANSWERS: {
            return {
                ...state,
                answers: [],
            }
        }
        default: {
            return state;
        }
    }
}
