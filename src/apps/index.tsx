import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import reducers from './reducers';
import App from './modules/counts/counts.component';

const store = createStore(reducers, applyMiddleware(thunk))

class Apps extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Apps;
