import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './FriendCard';

const url = 'http://localhost:5000/friends';

function FriendList() {
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

    useEffect(() => {
        getFriends()
    }, [])

    if (friends) {
        return(
            <div style={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
            }}>
                <div style={{
                    boxSizing: 'border-box',
                    width: 1140,
                    maxWidth: '95%',
                    display: 'flex', 
                    flexWrap: 'wrap',
                }}>
                    {friends.map(friend => <Card {...friend} />)}
                </div>
            </div>
        );
    }

    return(
        <div style={{ height: '100vh', width: '100%' }}>
            no friends received n that
        </div>
    );
    
}

export default FriendList;