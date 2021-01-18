import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionEnum } from './actionTypes';
import { axiosWithBase } from '../../utils/axiosWithBase';
import { User } from '../../utils/types';

export const ToggleLoading = () => ({
  type: ActionEnum.FETCH_USER_DATA_TOGGLE_LOADING,
});

export const fetchUserData = (payload: any) => {
  return {
    type: ActionEnum.FETCH_USER_DATA,
    payload,
  };
};
export const addUserFollower = (payload: User) => {
  return {
    type: ActionEnum.FETCH_USER_DATA_FOLLOWERS,
    payload,
  };
};

export const setUsername = (username: string) => ({
  type: ActionEnum.SET_USERNAME,
  payload: username,
});

export const fetchUser = (dispatch: Dispatch<any>, username: string) => {
  dispatch(ToggleLoading());
  axiosWithBase()
    .get(username)
    .then((res: AxiosResponse) => {
      dispatch(ToggleLoading());
      dispatch(fetchUserData(res.data));
    });

  dispatch(ToggleLoading());
  axiosWithBase()
    .get(`${username}/followers`)
    .then((res: AxiosResponse) => {
      dispatch(ToggleLoading());
      dispatch(addUserFollower(res.data));
    });
};
