import get from 'lodash.get';
import { useSelector } from 'react-redux';

export const useSelectorOfQuestions = () => useSelector(state => get(state, `questionnaire.questions`));
export const useSelectorOfTitle = () => useSelector(state => get(state, `questionnaire.title`));
