import React, { useEffect, useState } from 'react'
import './Userlist.css'
import axios from 'axios';

const Userlist = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const getUsers = async () => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data);
            console.log(users);
        } catch (error) {
            setError(error.message);
        }


        // console.log(response.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='article'>
            <h1>Team Members</h1>
            <input type="text" placeholder='Search by name...' />

            <div className="user_list">
                {
                    users.map((user) => (
                        <div key={user.id}>
                            <div className="user">
                                <div className="left">
                                    <h3>{user.name}</h3>
                                    <p>leane@gmail.com</p>
                                </div>
                                <div className="right">
                                    <p>Gwenborough</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Userlist