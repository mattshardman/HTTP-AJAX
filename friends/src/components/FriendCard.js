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
    }
}

function Card({name, age, email}) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.img}>
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