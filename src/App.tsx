import React, { Component } from 'react';
import { connect } from 'react-redux';

import { User } from './utils/types';
import UserCard from './components/UserCard';
import SearchUser from './components/SearchUser';
import {
  addUserFollower,
  fetchUser,
  fetchUserDataToggleLoading,
} from './redux/actions/actions';
import store from './redux/store';
import { axiosWithBase } from './utils/axiosWithBase';
import axios, { AxiosResponse } from 'axios';

interface Props {
  user?: User;
  isloading?: boolean;
  followers?: User[];
}

interface State {}

export class App extends Component<Props, State> {
  componentDidUpdate(prevProps: Props, prevState: State, snapshop: any) {
    if (this.props.user?.login !== prevProps.user?.login) {
      store.dispatch(fetchUserDataToggleLoading());
      if (this.props.user) {
        axios.get(this.props.user.followers_url!).then((res: AxiosResponse) => {
          console.log(res.data);
          store.dispatch(addUserFollower(res.data));
        });
      }
    }
  }

  render() {
    console.log(this.props.user);
    console.log(this.props.followers);
    return (
      <div>
        <h1>GitHub User Card</h1>
        <SearchUser />
        {this.props.user && (
          <>
            <UserCard user={this.props.user} showLocation={true} />
            {this.props.followers &&
              this.props.followers.map((user: User) => (
                <UserCard user={user} key={user.id} showLocation={false} />
              ))}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
  followers: state.user.followers,
});

export default connect(mapStateToProps)(App);
