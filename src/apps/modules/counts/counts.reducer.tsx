import { ADD_TODO } from './counts.constant';
import { countAction } from './counts.action';

export interface StoreState {
    count: number;
}

export default function countReducer(state: StoreState = { count: 0 }, action: countAction): StoreState {
    switch (action.type) {
        case ADD_TODO:
            const count = state.count || 0;
            return { ...state, count: count + 1 };
    }
    return state;
}