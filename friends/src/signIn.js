import React, { useState } from 'react';
import server from './utils/server';

function Signin(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        server()
            .post('/api/login', data)
            .then(result => {
                console.log(result)
                localStorage.setItem('token', result.data.payload)
                props.history.push('/account')
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default Signin