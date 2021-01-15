import React, { Component } from 'react';

export interface User {
  avatar_url?: string;
  bio?: string;
  location?: string;
  login: string;
  name?: string;
  url?: string;
}

interface Props {
  user: User;
}

class UserCard extends Component<Props> {
  render() {
    return (
      <div>
        <div>
          <img
            src={this.props.user.avatar_url}
            alt={`${this.props.user.name}'s github profile pic`}
          />
        </div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.login}</p>
        <p>{this.props.user.location}</p>
        <p>{this.props.user.bio}</p>
      </div>
    );
  }
}

export default UserCard;
