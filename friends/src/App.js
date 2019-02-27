import React, { useState, useEffect } from 'react';
import './App.css';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddNewFriend';
import axios from 'axios';

const url = 'http://localhost:5000/friends';

function App () {
  const [friends, setFriends] = useState(null);
  const [error, setError] = useState(false);

  const getFriends = async () => {
    try {
      const res = await axios.get(url);
      console.log(res)
      setFriends(res.data);
    } catch(e) {
      setError(true);
    }
  }

  const submitHandler = async (e, fields) => {
    e.preventDefault();
    try {
        const res = await axios.post(url, fields);
        setFriends(res.data);
    } catch(e) {
        console.log(e)
    }
  } 

  useEffect(() => {
    getFriends()
  }, []);

  return (
    <div className="App">
      <AddFriend submitHandler={submitHandler} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
