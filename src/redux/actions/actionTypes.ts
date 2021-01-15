export interface Action {
  type: string;
  payload?: any;
}

export enum ActionEnum {
  FETCH_USER_DATA_TOGGLE_LOADING = 'FETCH_USER_DATA_TOGGLE_LOADING',
  FETCH_USER_DATA = 'FETCH_USER_DATA',
  FETCH_USER_DATA_FOLLOWERS = 'FETCH_USER_DATA_FOLLOWERS',
}
