// Component Type
import { Component } from 'react';

// User Type
import { User } from './utils/types';

// Components
import UserPanel from './components/UserPanel';
import SearchUser from './components/SearchUser';

// From Redux
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions/actions';
import store from './redux/store';
import { UserState } from './redux/reducers/userReducer';

// Animation Lib
import { motion } from 'framer-motion';

export interface Props {
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

  render() {
    return (
      <main>
        <motion.nav>
          <h1>GitHub User Card</h1>
          <SearchUser />
        </motion.nav>
        <UserPanel />
      </main>
    );
  }
}

const mapStateToProps = (state: { user: UserState }) => ({
  user: state.user.user,
  username: state.user.username,
  isLoading: state.user.isLoading,
  followers: state.user.followers,
});

export default connect(mapStateToProps)(App);
