import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTitleSelector, updateTitle } from '../../store';
import { FormControlLabel, Input } from '../../components';
import styles from './TitleInput.module.scss';

const TitleInput = () => {
    const dispatch = useDispatch();
    const title = useTitleSelector();
    const [value, setValue] = useState(title);

    useEffect(() => {
        setValue(title);
    }, [title]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        dispatch(updateTitle(e.target.value));
    }, [dispatch]);

    return <FormControlLabel label="Edit Questionnaire Title:" labelPlacement="start" control={<Input className={styles.input} color="primary" onChange={handleChange} value={value} />} />;
};

export default TitleInput;
