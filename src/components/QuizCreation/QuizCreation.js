import React from 'react';

import styles from './QuizCreation.module.scss';
import { TitleInput, QuestionInput, QuestionsList } from '../../components';

const QuizCreation = () => (
    <div className={styles.container}>
        <TitleInput />
        <QuestionInput />
        <QuestionsList />
    </div>
);

export default QuizCreation;
