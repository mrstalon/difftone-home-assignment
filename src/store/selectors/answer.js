import get from 'lodash.get';
import { useSelector } from 'react-redux';

export const useSelectorOfAnswers = () => useSelector(state => get(state, `answer.answers`));
