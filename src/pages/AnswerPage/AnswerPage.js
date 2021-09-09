import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AnswerPage.module.scss';
import { INDEX_PAGE_URL } from '../../constants';
import { useSelectorOfTitle } from '../../store';
import { Typography, AnswerList } from '../../components';

const AnswerPage = () => {
    const title = useSelectorOfTitle();

    return (
        <div className={styles.page}>
            <Typography color="primary" variant="h3">
                Answer `{title}` Questionnaire Page
            </Typography>
            <Link className={styles.link} to={INDEX_PAGE_URL}>
                Go to Creation Page
            </Link>

            <AnswerList />
        </div>
    );
}

export default AnswerPage;
