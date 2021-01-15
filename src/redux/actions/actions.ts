import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionEnum } from './actionTypes';
import { axiosWithBase } from '../../utils/axiosWithBase';
import { User } from '../../utils/types';

export const fetchUserDataToggleLoading = () => ({
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

export const fetchUser = (dispatch: Dispatch<any>, username: string) => {
  dispatch(fetchUserDataToggleLoading());
  axiosWithBase()
    .get(username)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      dispatch(fetchUserDataToggleLoading());
      dispatch(fetchUserData(res.data));
    });
};
