import { User } from '../../utils/types';
import { Action, ActionEnum } from '../actions/actionTypes';

const initialState: { isLoading: boolean; user?: User; followers: User[] } = {
  isLoading: false,
  user: undefined,
  followers: [],
};

const userReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionEnum.FETCH_USER_DATA_FOLLOWERS:
      return { ...state, followers: payload };
    case ActionEnum.FETCH_USER_DATA_TOGGLE_LOADING:
      const isLoading = !state.isLoading;
      return { ...state, isLoading };
    case ActionEnum.FETCH_USER_DATA:
      return { ...state, user: payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
