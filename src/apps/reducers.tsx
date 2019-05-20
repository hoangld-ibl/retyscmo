import { combineReducers } from 'redux';

import count from './modules/counts/counts.reducer';

const rootReducer = combineReducers({
    count,
});

export default rootReducer;