import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loading.css';

const Loading = () => {
    return (
        <div className='loading'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>FETCHING RECORDS...</p>
        </div>
    )
}

export default Loading