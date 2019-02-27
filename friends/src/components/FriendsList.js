import React from 'react';
import Card from './FriendCard';

const styles = {
    wrapper: { 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
    },
    cardWrapper: {
        boxSizing: 'border-box',
        width: 1140,
        maxWidth: '95%',
        display: 'flex', 
        flexWrap: 'wrap',
    }
}

function FriendList({friends, update, setUpdate, deleteFriend}) {
    if (friends) {
        return(
            <div style={styles.wrapper}>
                <div style={styles.cardWrapper}>
                    {friends
                        .map(friend => <Card 
                            key={friend.id} 
                            update={update}
                            setUpdate={setUpdate}
                            deleteFriend={deleteFriend} 
                            {...friend} 
                        />)
                    }
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