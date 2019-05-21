import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import './index.scss';
import Router from './routers';

const { persistor, store } = configureStore();

class Apps extends React.Component {

    public render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }
}

export default Apps;