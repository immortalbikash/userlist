import React from 'react'
import './Userlist.css'

const Userlist = () => {
    return (
        <div className='article'>
            <h1>Team Members</h1>
            <input type="text" placeholder='Search by name...' />

            <div className="user_list">
                <div className="user">
                    <div className="left">
                        <h3>Leanne Graham</h3>
                        <p>leane@gmail.com</p>
                    </div>
                    <div className="right">
                        <p>Gwenborough</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlist