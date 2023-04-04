import React from 'react'
import { useSelector } from 'react-redux';
import Home from './Home/Home';
import { Route } from 'react-router-dom';

const URoute = ({children,...rest}) => {
    const {currentUser} = useSelector((state)=>state.user)
    return currentUser ? <Home/> : <Route {...rest}/>;
}

export default URoute
