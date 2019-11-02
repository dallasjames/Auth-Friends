import React, { useState } from 'react';
import server from './utils/server';

function AddFriend(){
    const [data, setData] = useState({
        id: null,
        name: '',
        age: null,
        email: ''
    })

    const [error, setError] =  useState()

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        server()
            .post('/api/friends', data)
            .then(result => {

            })
            .catch(err => {
                setError(err.response.data.message)
            })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input type="number" name="id" placeholder="ID" value={data.id} onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} />
            <input type="age" name="age" placeholder="Age" value={data.age} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default AddFriend