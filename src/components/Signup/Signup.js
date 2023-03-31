import React, { useEffect, useState } from 'react'
import { auth, provider,analytics } from './config'
import { signInWithPopup } from 'firebase/auth'

import './signup.css'
import Home from '../Home/Home'

const Signup = () => {

	const [value, setValue ] = useState('');
	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email)
			localStorage.setItem('email', data.user.email)
			console.log(data)
		})
	}

	useEffect(() => {
		setValue(localStorage.getItem('email'))
	})

	return (
		<>
			{value ? <Home /> :
				<section className="containe forms">
					<div className="form login">
						<div className="form-content">
							<header>Login</header>
							<form action="#">
								<div className="field input-field">
									<input type="email" placeholder="Email" className="input" />
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Password" className="password" />
									<i className='bx bx-hide eye-icon'></i>
								</div>

								<div className="field button-field">
									<button>Login</button>
								</div>
							</form>

							<div className="form-link">
								<span>Don't have an account? <a href="#" className="link signup-link">Signup</a></span>
							</div>
						</div>

						<div className="line"></div>

						<div className="media-options">
							<a href="#" className="field facebook" >
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

					{/* <!-- Signup Form --> */}

					{/* <div className="form signup">
						<div className="form-content">
							<header>Signup</header>
							<form action="#">
								<div className="field input-field">
									<input type="email" placeholder="Email" className="input" />
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Create password" className="password" />
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Confirm password" className="password" />
									<i className='bx bx-hide eye-icon'></i>
								</div>

								<div className="field button-field">
									<button>Signup</button>
								</div>
							</form>

							<div className="form-link">
								<span>Already have an account? <a href="#" className="link login-link">Login</a></span>
							</div>
						</div>

						<div className="line"></div>

						<div className="media-options">
							<a href="#" className="field facebook">
								<i className='bx bxl-facebook facebook-icon'></i>
								<span>Login with Facebook</span>
							</a>
						</div>

						<div className="media-options">
							<a href="#" className="field google">
								<img src="#" alt="" className="google-img" />
								<span>Login with Google</span>
							</a>
						</div>

					</div> */}
				</section>
			}
		</>
	)
}

export default Signup
