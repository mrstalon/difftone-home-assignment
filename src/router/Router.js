import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '../store';
import { ANSWER_PAGE_URL, INDEX_PAGE_URL } from '../constants';
import { AnswerPage, CreatePage } from '../pages';

const Router = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path={INDEX_PAGE_URL} component={CreatePage} exact />
                <Route path={ANSWER_PAGE_URL} component={AnswerPage} exact />
                <Route component={CreatePage} />
            </Switch>
        </Provider>
    </BrowserRouter>
);

export default Router
