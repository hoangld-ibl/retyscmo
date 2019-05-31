import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { InitPage, CountsPage } from './pages';
import { Constants } from './constants';

class Apps extends React.Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path={'/'} component={InitPage} />
                    <Route path={Constants.page.init} component={InitPage} />
                    <Route path={Constants.page.counts} component={CountsPage} />
                </Switch>
            </Router>
        );
    }
}

export default Apps;