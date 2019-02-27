import React, { useState } from 'react';
import axios from 'axios';

const styles = {
    form: {
        boxSizing: 'border-box',
        padding: '30px 0',
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    input: {
        width: 200,
        height: 40,
        borderRadius: 5,
        padding: '0 15px',
        border: '1px solid orange',
        fontSize: 16,
    },
    button: {
        width: 200, 
        height: 40,
        borderRadius: 5,
        border: '1px solid orange',
        background: 'orange',
        color: '#fff',
        fontSize: 16
    }
}

const url = 'http://localhost:5000/friends';

function AddFriend({submitHandler}) {
    const [fields, setFields] = useState({
        name: '',
        age: '',
        email: '',
    });

    const changeHandler = (e, input) => {
        const { value } = e.target;
        setFields(st => ({ ...st, [input]: value }));
    }

    return(
        <form 
            style={styles.form} 
            onSubmit={(e) => {
                submitHandler(e, fields);
                setFields({
                    name: '',
                    age: '',
                    email: '',
                });
            }}>
            <input type="text" placeholder="Name please" style={styles.input} value={fields.name} onChange={e => changeHandler(e, 'name')}/>
            <input type="text" placeholder="Age please" style={styles.input} value={fields.age} onChange={e => changeHandler(e, 'age')}/>
            <input type="text" placeholder="Email please" style={styles.input} value={fields.email} onChange={e => changeHandler(e, 'email')}/>
            <button style={styles.button}>ADD</button>
        </form>
    )
}

export default AddFriend;