// import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Sidebar from './components/Sidebar/sidebar';

import { useEffect } from 'react';
import Temp from "./components/Temp/Temp";

import ReactGA from "react-ga"
import Signin from './components/Signup/Signin';

import { useSelector,useDispatch } from 'react-redux';
import { setUser } from './redux/action';
import { auth } from './components/Signup/config';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  },[])
  const {currentUser} = useSelector((state)=> state.user)
  useEffect(()=>{
    ReactGA.initialize('UA-260450577-1');

    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/signup"  element={<Signup />}>
          </Route>
          <Route path="/signin" element={<Signin />}>
          </Route>
          <Route path="/temp" element={<Temp />}>
          </Route>
          <Route path="/sidebar" element={<Sidebar/>}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App;
