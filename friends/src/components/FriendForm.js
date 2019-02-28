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
    },
    error: { 
        zIndex: 10,
        position: 'absolute', 
        width: 300, 
        height: 40, 
        top: 50, 
        left: 10,
        background: '#ff6e42',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        color: '#fff'
    }
}

function FriendForm({update, updateHandler, addHandler}) {
    const [fields, setFields] = useState({
        name: '',
        age: '',
        email: '',
    });

    const [error, setError] = useState({
        name: null,
        age: null,
        email: null,
    });

    const validator = (value, input) => {
        console.log(value, input)
        if(input === 'name') {
            if (value.length < 3) {
                return setError(st => ({...st,  name: 'Name must be at least 3 characters'}));
            }
            return null;
        }

        if(input === 'age') {
            if (isNaN(value)) {
                return setError(st => ({...st,  age: 'Age must be a number'}));
            }
            return null;
        }

        if(input === 'email') {
            if(!value.includes('@')) {
                return setError(st => ({...st,  email: 'Email must contain @'}));
            }

            if(!value.includes('.')) {
                return setError(st => ({...st,  email: 'Email must contain .'}));
            }
        }
        return null;
    }

    const changeHandler = (e, input) => {
        const { value } = e.target;
        setError(st => ({...st, [input]: null }));
        setFields(st => ({ ...st, [input]: value }));
    }

    const formInputs = [
        {
            tag: 'name',
            placeholder: 'Name please',
        },
        {
            tag: 'age',
            placeholder: 'Age please'
        },
        {
            tag: 'email',
            placeholder: 'Email address please'
        }
    ]

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

            {formInputs.map(each => 
                <div style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder={each.placeholder}
                        style={{...styles.input, border: error[each.tag] ? '1px #ff6e42 solid': '1px orange solid'}} 
                        value={fields[each.tag]} 
                        onFocus={() => setError(st => ({ ...st, [each.tag]: null}))}
                        onBlur={() => validator(fields[each.tag], each.tag)}
                        onChange={e => changeHandler(e, each.tag)}
                    />
                    { !!error[each.tag] && <small style={styles.error}> {error[each.tag]}</small>
                    }
                </div>
                )}

            <button style={styles.button}>{update ? 'UPDATE' : 'ADD'}</button>
        </form>
    )
}

export default FriendForm;