export enum ActionTypes {
    SET_LOGGED_IN = 'SET_LOGGED_IN'
}

type LoggedInAction = {
    type: ActionTypes.SET_LOGGED_IN;
    payload: boolean;
}

export type AuthAction = LoggedInAction;