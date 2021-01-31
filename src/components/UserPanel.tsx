import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserState } from '../redux/reducers/userReducer';
import { User } from '../utils/types';
import UserCard from './UserCard';
import { Props } from '../App';

interface State {}

export class UserPanel extends Component<Props, State> {
  render() {
    return (
      <div className="user-board">
        {this.props.user && (
          <>
            <UserCard user={this.props.user} main={true} class="main-user" />
            {this.props.followers && (
              <>
                <h4>Followers</h4>
                <div className="followers">
                  {this.props.followers.map((user: User) => (
                    <UserCard
                      user={user}
                      key={user.id}
                      main={false}
                      class="follower"
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: { user: UserState }) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
  followers: state.user.followers,
});

export default connect(mapStateToProps)(UserPanel);
