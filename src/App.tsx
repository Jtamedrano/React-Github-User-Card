import React, { Component } from 'react';
import { connect } from 'react-redux';

import { User } from './utils/types';
import UserCard from './components/UserCard';
import SearchUser from './components/SearchUser';
import { fetchUser } from './redux/actions/actions';
import store from './redux/store';
import { motion } from 'framer-motion';

interface Props {
  username?: string;
  user?: User;
  isloading?: boolean;
  followers?: User[];
}

interface State {}

export class App extends Component<Props, State> {
  componentDidMount() {
    fetchUser(store.dispatch, 'Jtamedrano');
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshop: any) {
    if (
      this.props.user?.login !== prevProps.user?.login &&
      this.props.username
    ) {
      fetchUser(store.dispatch, this.props.username!);
    }
  }

  render() {
    return (
      <main>
        <motion.nav>
          <h1>GitHub User Card</h1>
          <SearchUser />
        </motion.nav>
        <div className="user-board">
          {this.props.user && (
            <>
              <UserCard
                user={this.props.user}
                showLocation={true}
                class="main-user"
              />
              {this.props.followers &&
                this.props.followers.map((user: User) => (
                  <UserCard
                    user={user}
                    key={user.id}
                    showLocation={false}
                    class="follower"
                  />
                ))}
            </>
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
  followers: state.user.followers,
});

export default connect(mapStateToProps)(App);
