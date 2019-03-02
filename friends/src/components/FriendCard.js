import React from 'react';

const styles = {
    wrapper: {
        boxSizing: 'border-box',
        margin: 40,
        height: 350,
        width: 300,
        borderRadius: 5,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
        boxShadow: '0 3px 35px rgba(0,0,0,0.2)'
    },
    img: {
        position: 'relative',
        width: '100%',
        height: '50%',
        background: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: '100%',
        height: '50%',
        padding: 16
    },
    button: {
        position: 'absolute',
        background: 'rgba(255,255,255,0.50',
        borderRadius: '50%',
        border: 'none',  
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none'
    },
    updateBtn: {
        top: 40,
        height: 25, 
        width: 25,
        right: 10,
    },
    deleteBtn: {
        top: 10,
        right: 10,
        height: 25, 
        width: 25,
    }
}

function Card({id, name, age, email, update, setUpdate, deleteFriend}) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.img}>
            <button 
                type="button" 
                style={{...styles.button, ...styles.deleteBtn}} 
                onClick={(e) => deleteFriend(e, id)}
            >
                <i className="material-icons" style={{ fontSize: 12 }}>
                    close
                </i>
            </button>
            <button 
                type="button" 
                style={{...styles.button, ...styles.updateBtn}} 
                onClick={(e) => {
                    if(update) {
                        return setUpdate(null);
                    }
                    return setUpdate(id);
                }}
            >
                <i className="material-icons" style={{ fontSize: 12 }}>
                    change_history
                </i>
            </button>
                <img src="https://image.flaticon.com/icons/svg/1256/1256661.svg" alt="" width="40%"/>
            </div>
            <div>
                <h1>{name}</h1>
                <p>{age}</p>
                <p>{email}</p>     
            </div>
        </div>
    )
}

export default Card;