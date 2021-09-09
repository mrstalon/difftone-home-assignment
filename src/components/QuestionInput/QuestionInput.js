import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import styles from './QuestionInput.module.scss';
import { addQuestion, clearQuestions } from '../../store';
import { ANSWER_TYPES } from '../../constants';
import { FormControlLabel, TextareaAutosize, Button } from '../../components';

const QuestionInput = () => {
    const dispatch = useDispatch();
    const [isQuestionAdding, setIsQuestionAdding] = useState();
    const [questionValue, setQuestionValue] = useState('');

    const handleChange = useCallback((e) => {
        setQuestionValue(e.target.value);
    }, []);

    const toggleAddingQuestion = useCallback(() => {
        if (isQuestionAdding) {
            setQuestionValue('');
        }

        setIsQuestionAdding((state) => !state);
    }, [isQuestionAdding]);

    const handleSubmit = useCallback(() => {
        // TODO: Different variants of answers ( checkbox, ...etc )
        dispatch(addQuestion({
            text: questionValue,
            answerType: ANSWER_TYPES.text,
        }));

        toggleAddingQuestion();
    }, [dispatch, toggleAddingQuestion, questionValue]);

    const handleClear = useCallback(() => {
        dispatch(clearQuestions());
    }, [dispatch]);

    const toggleButtonTitle = useMemo(() => isQuestionAdding ? 'Cancel Adding Question' : 'Add Question', [isQuestionAdding]);

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <Button className={styles.button} color="primary" variant="contained" size="large" onClick={toggleAddingQuestion}>
                    {toggleButtonTitle}
                </Button>

                <Button className={styles.button} color="primary" variant="contained" size="large" onClick={handleClear}>
                    Clear Questions
                </Button>
            </div>

            {isQuestionAdding && (
                <div className={styles.wrap}>
                    <FormControlLabel
                        control={<TextareaAutosize onChange={handleChange} className={styles.textarea} />}
                        label="Write Question:"
                        labelPlacement="start"
                    />

                    {questionValue && questionValue.length && (
                        <Button
                            onClick={handleSubmit}
                            className={clsx(styles.add, styles.button)}
                            color="primary"
                            variant="outlined"
                            size="small"
                        >
                            Add Question
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestionInput;
