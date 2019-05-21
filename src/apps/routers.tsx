import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {CountsPage} from './pages';

class Apps extends React.Component {
    public render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact={true} path="/" component={CountsPage} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Apps;