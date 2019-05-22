import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { InitPage, CountsPage } from './pages';
import { Constants } from './constants';

class Apps extends React.Component {
    public render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact={true} path={'/'} component={InitPage} />
                    <Route exact={true} path={Constants.page.init} component={InitPage} />
                    <Route exact={true} path={Constants.page.counts} component={CountsPage} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Apps;