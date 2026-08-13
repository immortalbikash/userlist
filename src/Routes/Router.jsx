import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from '../Components/Userlist'
import Userdetail from '../Components/Userdetail'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Userlist} />
                <Route path='/users/:id' Component={Userdetail} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router