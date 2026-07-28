import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import Userlist from './Userlist';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const getUsers = async () => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data);
        } catch (error) {
            setError(error.message);
        }


        // console.log(response.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <Userlist />
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <p>{user.address.city}</p>
                    </div>
                ))
            }
            {error && <p>{error}</p>}
        </div>
    )
}

export default Dashboard