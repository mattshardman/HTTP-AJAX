import React from 'react';
import Card from './FriendCard';

function FriendList({friends}) {
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
                    {friends.reverse().map(friend => <Card {...friend} />)}
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