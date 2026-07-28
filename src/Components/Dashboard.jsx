import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import Userlist from './Userlist';

const Dashboard = () => {

  

    return (
        <div>
            <Userlist />
            {/* {
                users.map((user) => (
                    <Userlist data={user} />
                ))
            }
            <Userlist />
            {/* {
                users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <p>{user.address.city}</p>
                    </div>
                ))
            } */}
            {/* {error && <p>{error}</p>} */}
        </div>
    )
}

export default Dashboard