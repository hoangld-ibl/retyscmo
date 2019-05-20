import { ADD_TODO } from './counts.constant';

export interface CountType {
    type: string;
}

export type countAction = CountType;

export function countAction(): CountType {
    return {
        type: ADD_TODO,
    }
}

export const countActionDo = () => (dispatch: any, getState: any) => {
    dispatch(countAction())
}