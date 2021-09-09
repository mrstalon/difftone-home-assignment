import React from 'react';

import { TitleInput, QuestionInput, QuestionsList } from '../../components';
import styles from './QuizCreation.module.scss';

const QuizCreation = () => (
    <div className={styles.container}>
        <TitleInput />
        <QuestionInput />
        <QuestionsList />
    </div>
);

export default QuizCreation;
