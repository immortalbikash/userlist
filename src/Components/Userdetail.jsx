import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Userdetail.css';
import { IoIosArrowRoundBack } from "react-icons/io";

const Userdetail = () => {

    const [user, setUser] = useState(null);
    const getParams = useParams();
    const getId = getParams.id;

    const getUser = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${getId}`);
            setUser(response.data);
            console.log(response.data);
        } catch (error) {
            <p>{error}</p>
        }
    }

    useEffect(() => {
        getUser();
    }, [getId])

    if (!user) return <p>Loading...</p>
    return (
        <div className='detail_main'>
            <Link to={'/'} className="back"><IoIosArrowRoundBack /> <span>Back to directory</span></Link>
            <div className="top">
                <h2>{user.name}</h2>
                <p>{user.company.name}</p>
            </div>
            <div className="bb"></div>
            <span>CONTACT</span>
            <div className="flex">
                <p>Email</p>
                <h5>{user.email}</h5>
            </div>
            <div className="bb"></div>
            <div className="flex">
                <p>PHONE</p>
                <h5>{user.phone}</h5>
            </div>
            <div className="bb"></div>
            <span>ADDRESS</span>
            <div className="flex">
                <p>Street</p>
                <h5>{user.address.street}</h5>
            </div>
            <div className="bb"></div>
            <div className="flex">
                <p>City</p>
                <h5>{user.address.city}</h5>
            </div>
            <div className="bb"></div>
            <div className="flex">
                <p>Zip</p>
                <h5>{user.address.zipcode}</h5>
            </div>
        </div>
    )
}

export default Userdetail