import { Component } from 'react';
import { User } from '../utils/types/index';

interface State {}

interface Props {
  user: User;
  showLocation?: boolean;
  class?: string;
}

class UserCard extends Component<Props, State> {
  render() {
    return (
      <>
        <div className={`${this.props.class} user-card`}>
          <div>
            <img
              src={this.props.user.avatar_url}
              alt={`${this.props.user.name}'s github profile pic`}
            />
          </div>
          <h3>{this.props.user.name}</h3>
          <a href={this.props.user.url}>@{this.props.user.login}</a>
          {this.props.showLocation && <p>{this.props.user.location}</p>}
          <p>{this.props.user.bio}</p>
        </div>
      </>
    );
  }
}

export default UserCard;
