import { Component } from 'react';
import { User } from '../utils/types/index';

interface State {}

interface Props {
  user: User;
  main?: boolean;
  class?: string;
}

class UserCard extends Component<Props, State> {
  render() {
    return (
      <>
        {this.props.user.name && <h3>{this.props.user.name}</h3>}
        <div className={`${this.props.class} user-card`}>
          <div className="user-card-profile-pic-wrapper">
            <img
              src={this.props.user.avatar_url}
              alt={`${this.props.user.name}'s github profile pic`}
            />
          </div>
          <div className="user-card-text-container">
            <a href={this.props.user.url}>@{this.props.user.login}</a>
            {this.props.main && (
              <>
                <p>{this.props.user.location}</p>
                <p>{this.props.user.bio}</p>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default UserCard;
