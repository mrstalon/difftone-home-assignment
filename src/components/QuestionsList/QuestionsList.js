import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './QuestionsList.module.scss';
import { Typography, Button } from '../../components';
import { useSelectorOfQuestions, removeQuestion } from '../../store';

const QuestionsList = () => {
    const dispatch = useDispatch();
    const questions = useSelectorOfQuestions();

    const handleClick = useCallback((id) => {
        dispatch(removeQuestion(id));
    }, [dispatch]);

    return (
        <div className={styles.questions}>
            {questions.map(({ text, id }, index) => (
                <div className={styles.question} key={id}>
                    <Typography className={styles.text} variant="h6">
                        {index + 1}. {text}
                    </Typography>

                    <Button
                        className={styles.delete}
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => handleClick(id)}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    )
};

export default QuestionsList;
