import React from 'react';
import { Link } from 'react-router-dom';

import { ANSWER_PAGE_URL } from '../../constants';
import { Typography, QuizCreation } from '../../components';
import styles from './CreatePage.module.scss';

const CreatePage = () => (
    <div className={styles.page}>
        <Typography color="primary" variant="h3">
            Create Questionnaire Page
        </Typography>
        <Link className={styles.link} to={ANSWER_PAGE_URL}>
            Go to Answer Page
        </Link>

        <QuizCreation />
    </div>
);

export default CreatePage;
