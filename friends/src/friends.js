import React, { useState, useEffect } from 'react';
import server from './utils/server';

function Friends() {
    const [friends, setFriends] = useState()

    useEffect(() => {
        server()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {friends && friends.map((friend, i) => (
                <div key={i}>
                    <h1>{friend.name}</h1>
                    <h1>Age: {friend.age}</h1>
                    <h1>Email: {friend.email}</h1>
                </div>
            ))}
        </>
    )
}

export default Friends