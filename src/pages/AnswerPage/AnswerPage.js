import React from 'react';
import { Link } from 'react-router-dom';

import { INDEX_PAGE_URL } from '../../constants';
import { useTitleSelector } from '../../store';
import { Typography, AnswerList } from '../../components';
import styles from '../CreatePage/CreatePage.module.scss';

const AnswerPage = () => {
    const title = useTitleSelector();

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
