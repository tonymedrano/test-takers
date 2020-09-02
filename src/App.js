import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import UsersList from './components/UsersList/UsersList';

function App() {
  const [usersState, setUsersState] = useState([]);
  const [errorState, setErrorState] = useState({
    isError: false,
    message: null
  });

  useEffect(() => {
    axios.get('https://hr.oat.taocloud.org/v1/users')
      .then(response => {
        setUsersState(response.data);
        setErrorState({ isError: false, message: null });
      }).catch(error => {
        console.log(error);
        setErrorState({ isError: true, message: error.message });
      });
  }, []);

  let list;
  if (errorState.isError) {
    list = (<p>{errorState.message}</p>);
  } else {
    list = <UsersList list={usersState} />;
  }

  return (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
