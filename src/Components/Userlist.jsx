import React, { useEffect, useState } from 'react'
import './Userlist.css'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Loading from './Loading';

const Userlist = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState('');

    console.log(search);

    const filteredUser = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()));

    console.log(filteredUser)

    const getUsers = async () => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setLoading(false)
            setUsers(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }


        // console.log(response.data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className='article'>
                <h1>Team Members</h1>
                <input type="text" placeholder='Search by name...' onChange={(e) => setSearch(e.target.value)} />

                {loading ? (<Loading />) : (
                    <div className="user_list">
                        {
                            filteredUser.map((user) => (
                                <div key={user.id}>
                                    <div className="user">
                                        <div className="left">
                                            <h3>{user.name}</h3>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="right">
                                            <p>{user.address.city}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}


            </div>

        </>
    )
}

export default Userlist