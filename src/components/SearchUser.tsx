import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMsg } from './ErrorMsg';
import { fetchUser, setUsername } from '../redux/actions/actions';

const SearchUser = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          name="searchInput"
          placeholder="Search a user on github"
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
        />
        <ErrorMsg message="" />
      </div>
      <button
        onClick={() => {
          dispatch(setUsername(searchInput));
          fetchUser(dispatch, searchInput);
          setSearchInput('');
        }}
      >
        Search User
      </button>
    </div>
  );
};

export default SearchUser;
