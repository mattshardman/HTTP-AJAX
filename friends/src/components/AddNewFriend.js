import React, { useState } from 'react';

const styles = {
    form: {
        zIndex: 1000,
        boxSizing: 'border-box',
        padding: '30px 0',
        width: '100%',
        minHeight: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    input: {
        boxSizing: 'border-box',
        width: 300,
        height: 40,
        borderRadius: 5,
        padding: '0 15px',
        border: '1px solid orange',
        fontSize: 16,
        margin: 10
    },
    button: {
        boxSizing: 'border-box',
        width: 300, 
        height: 40,
        borderRadius: 5,
        border: '1px solid orange',
        background: 'orange',
        color: '#fff',
        fontSize: 16,
        margin: 10
    }
}

function AddFriend({update, updateHandler, addHandler}) {
    console.log(update)
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
                if(update) {
                    updateHandler(e, fields);
                } else {
                    addHandler(e, fields);
                }
                setFields({
                    name: '',
                    age: '',
                    email: '',
                });
            }}>
            <input 
                type="text" 
                placeholder="Name please" 
                style={styles.input} 
                value={fields.name} 
                onChange={e => changeHandler(e, 'name')}
            />
            <input 
                type="text" 
                placeholder="Age please" 
                style={styles.input} 
                value={fields.age} 
                onChange={e => changeHandler(e, 'age')}
            />
            <input 
                type="text" 
                placeholder="Email please" 
                style={styles.input} 
                value={fields.email} 
                onChange={e => changeHandler(e, 'email')}
            />
            <button style={styles.button}>{update ? 'UPDATE' : 'ADD'}</button>
        </form>
    )
}

export default AddFriend;