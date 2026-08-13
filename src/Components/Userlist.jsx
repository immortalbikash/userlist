import React, { useEffect, useState } from 'react'
import './Userlist.css'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Userlist = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState('');

    const filteredUser = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()));


    const getUsers = async () => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setLoading(false)
            setUsers(response.data);
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className='article'>
                <h1>Team Members</h1>
                <input type="text" placeholder='Search by name...' value={search} onChange={(e) => setSearch(e.target.value)} />

                {loading ? (<Loading message={"FETCHING RECORDS..."} />) : (

                    <div className="user_list">
                        {
                            error ? (<p>{error}</p>) :
                                filteredUser.length === 0 ? (
                                    <p>No user Found</p>
                                ) : (

                                    filteredUser.map((user) => (
                                        <Link className='link' key={user.id} to={`/users/${user.id}`}>
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
                                        </Link>
                                    ))
                                )
                        }
                    </div>
                )}


            </div>

        </>
    )
}

export default Userlist