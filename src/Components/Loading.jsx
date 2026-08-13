import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loading.css';

const Loading = ({ message }) => {
    return (
        <div className='loading'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>{message}</p>
        </div>
    )
}

export default Loading