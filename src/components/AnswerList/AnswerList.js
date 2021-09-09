import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { FormControlLabel, TextareaAutosize, Typography } from '../../components';
import { useSelectorOfAnswers, initAnswers, useSelectorOfQuestions, updateAnswer, clearAnswers } from '../../store';
import styles from './AnswerList.module.scss';

const AnswerList = () => {
    const dispatch = useDispatch();
    const questions = useSelectorOfQuestions();
    const answers = useSelectorOfAnswers();

    useEffect(() => {
        dispatch(initAnswers(questions));

        return () => {
            dispatch(clearAnswers());
        };
    }, [questions]);

    const handleChange = useCallback((text, id) => {
        dispatch(updateAnswer({
            id,
            text,
        }))
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <Typography variant="h5" color="primary">
                Answer the questions below:
            </Typography>

            {answers.map(({ id, question, answer }, index) => (
                <FormControlLabel
                    key={id}
                    className={styles.item}
                    labelPlacement="start"
                    control={<TextareaAutosize className={styles.textarea} value={answer} onChange={(e) => handleChange(e.target.value, id)} />}
                    label={`${index + 1}. ${question}`}
                />
            ))}
        </div>
    );
};

export default AnswerList;
