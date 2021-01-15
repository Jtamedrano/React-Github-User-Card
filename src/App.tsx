import axios, { AxiosResponse } from 'axios';
import React, { Component } from 'react';

import { ErrorMsg } from './components/ErrorMsg';

interface Props {}
interface State {
  user: { login?: string };
  err: string;
}

export default class App extends Component<Props, State> {
  state = {
    user: {
      login: '',
    },
    err: '',
  };

  componentDidMount() {
    if (this.state.user.login === '') {
      axios
        .get('https://api.github.com/users/Jtamedrano')
        .then((res: AxiosResponse) => {
          console.log(res.data);
          if (res.status === 404) throw new Error('User not found');
          this.setState({ ...this.state, user: res.data, err: '' });
        })
        .catch((err) => {
          if (err.message.includes(404))
            this.setState({
              ...this.state,
              user: {},
              err: 'Github user not found',
            });
        });
    }
  }

  render() {
    return (
      <div>
        <h1>GitHub User Card</h1>
        <ErrorMsg message={this.state.err} />
      </div>
    );
  }
}
