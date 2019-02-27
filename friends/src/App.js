import React, { useState, useEffect } from 'react';
import './App.css';
import FriendList from './components/FriendsList';
import AddFriend from './components/AddNewFriend';
import axios from 'axios';

const url = 'http://localhost:5000/friends';

function App () {
  const [friends, setFriends] = useState(null);
  const [update, setUpdate] = useState(null);
  const [error, setError] = useState(false);

  const getFriends = async () => {
    try {
      const res = await axios.get(url);
      setFriends(res.data);
    } catch(e) {
      setError(true);
    }
  }

  const deleteFriend = async (e, id) => {
    try {
      const res = await  axios.delete(`${url}/${id}`);
      setFriends(res.data);
    } catch(e) {
      setError('Couldn\'t delete friend');
    }
  }

  const updateHandler = async (e, fields) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${url}/${update}`, fields);
      setFriends(res.data);
      setUpdate(null);
    } catch(e) {
      setError('Couldn\'t update friend');
    }
  }

  const addHandler = async (e, fields) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, fields);
      setFriends(res.data);
    } catch(e) {
      setError('Couldn\'t add friend');
    }
  } 

  useEffect(() => {
    getFriends()
  }, []);

  console.log(update)
  return (
    <div className="App">
      <AddFriend 
        update={update} 
        addHandler={addHandler} 
        updateHandler={updateHandler} 
      />
      <div style={{ height: 20, color: 'orange' }}>{!!error && error}</div>
      <FriendList 
        friends={friends} 
        update={update}
        setUpdate={setUpdate} 
        deleteFriend={deleteFriend} 
      />
    </div>
  );
}

export default App;
