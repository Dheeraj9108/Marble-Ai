import React, { useEffect, useState } from 'react'
import {BsGlobe} from 'react-icons/bs'
import {MdOutlineDateRange} from 'react-icons/md'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { logoutInitiate, setLanguage ,setSrchTitle} from '../../redux/action'
import axios from "axios"

const Navbar = () => {

    const  [searchParams,setSearchParams] = useSearchParams();
    const {currentUser} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAuth =()=>{
        if(currentUser){
            dispatch(logoutInitiate());
        }
        localStorage.clear();
    }
    const handleRoute=()=>{
        navigate('/signup');
    }
    const handleSearch =(e)=>{
        
    }

    const [searchTitle,setSearchTitle] = useState('');
    
    useEffect(()=>{
        dispatch(setSrchTitle(searchTitle));
    },[searchTitle])

    const [languageList,setLanguageList] = useState([]);
    const [selectedLanguageKey,setSelectedLanguageKey] = useState('en');

    useEffect(()=>{
        axios.get(`https://libretranslate.de/languages`)
        .then((res)=>{
            setLanguageList(res.data)
            console.log(res.data)
        })
    },[])

    const languageKey =(lan)=>{
        setSelectedLanguageKey(lan.target.value);
    }

    useEffect(()=>{ 
        dispatch(setLanguage(selectedLanguageKey))
    },[selectedLanguageKey])

    return (
        <>
            <nav className="navbar navbar-light" style={{background:"black"}}>
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSearch}>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsGlobe size={25} style={{paddingBottom:"2px",paddingRight:"5px"}}/>UNI
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchTitle(e.target.value);setSearchParams({name:e.target.value})}} />
                        <button className="btn btn-outline-success" type="submit">Search</button>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" style={{borderRadius:"0px"}} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <MdOutlineDateRange size={25} style={{paddingBottom:"2px",paddingRight:"2px"}}/>Date
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        {/* <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle"  style={{borderRadius:"0px"}} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsGlobe size={25} style={{paddingBottom:"2px",paddingRight:"5px"}}/>Language
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2" style={{maxHeight:"700px",overflow:"scroll"}}>
                                {languageList.map((language)=>{
                                    return (
                                        <li><a className="dropdown-item" href="#" value={language.code} >{language.name}</a></li>
                                    )
                                })}
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div> */}
                        <select className='dropdown-menu-dark' onChange={languageKey}>
                            <option >Language</option>
                            {languageList.map((language)=>{
                                    return (
                                        <option className='dropdown-item' value={language.code} >{language.name}</option>
                                    )
                                })}
                        </select>
                        {
                            currentUser ? <button type="button" className="btn btn-outline-success" onClick={handleAuth}>Logout</button> :
                            <button type="button" className="btn btn-outline-success" onClick={handleRoute}>Signup</button>
                        }
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
