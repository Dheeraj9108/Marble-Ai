import React, { useEffect, useState } from 'react'
import { auth, provider} from './config'
import { signInWithPopup } from 'firebase/auth'

import './signup.css'
import Home from '../Home/Home'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logintInitiate } from '../../redux/action'


const Signin = () => {
	const [state,setState] = useState({
		email:"",
		password:"",
	})
	const {email,password} = state;

    const {currentUser} = useSelector((state)=> state.user)

	const navigate = useNavigate();

	useEffect(()=>{
		if(currentUser){
			navigate('/');
		}
	},[currentUser])

	const dispatch = useDispatch();

	const [value, setValue ] = useState('');

    const handleChange =(e)=>{
		let {name,value} = e.target;
		setState({...state,[name]:value})
	}

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!email || !password){
            return ;
        }
        dispatch(logintInitiate(email,password))
        if(currentUser){
            setValue(currentUser.email)
			localStorage.setItem('email', currentUser.email)
            // navigate('/');
        }
        setState({email:"",password:""})
    }

	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email)
			localStorage.setItem('email', data.user.email)
			console.log(data)
		})
	}

	useEffect(() => {
		setValue(localStorage.getItem('email'))
	},[])

	return (
		<>
			{value ? <Home /> :
				<section className="containe forms">
					<div className="form login">
						<div className="form-content">
							<header>Login</header>
							<form action="#" onSubmit={handleSubmit}>
								<div className="field input-field">
									<input type="email" placeholder="Email" className="input" name='email' value={email} onChange={handleChange}/>
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Password" className="password" name='password' value={password} onChange={handleChange}/>
									<i className='bx bx-hide eye-icon'></i>
								</div>

								<div className="field button-field">
									<button>Login</button>
								</div>
							</form>

							<div className="form-link">
								<span>Don't have an account? <Link to="/signup" className="link signup-link"  style={{display:"inline"}}>Signup</Link></span>
							</div>
						</div>

						<div className="line"></div>

						<div className="media-options">
							<a href="/" className="field facebook" >
								<img src="./img/f-logo.png" alt="" className="google-img" />
								<span>Login with Facebook</span>
							</a>
						</div>

						<div className="media-options">
							<button className="field google" style={{ border: "1.7px solid black" }} onClick={handleClick}>
								<img src="./img/google-logo.png" alt="" className="google-img" />
								<span >Login with Google</span>
							</button>
						</div>

					</div>
				</section>
			}
		</>
	)
}

export default Signin
