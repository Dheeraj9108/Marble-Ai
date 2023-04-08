import React, { useEffect, useState } from 'react'
import {FiExternalLink} from "react-icons/fi"
import { useDispatch } from 'react-redux';
import { setSrchTitle } from '../../redux/action';

const Btns = () => {
    const [btnSearch,setBtnSearch] = useState('');
    const dispatch = useDispatch();

    const handleClick=(e)=>{
        setBtnSearch(e.target.value);
        console.log(e.target.value);
    }
    
    useEffect(()=>{
        dispatch(setSrchTitle(""));
        dispatch(setSrchTitle(btnSearch));
    },[btnSearch])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-black " style={{background:"black",paddingTop:"15px"}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <button type="button" className="btn btn-secondary" value={'pushpa'} onClick={handleClick}><FiExternalLink size={30} style={{paddingBottom:"2px",paddingRight:"5px"}} />Twitter</button>
                        <button type="button" className="btn btn-secondary" value={'movies'} onClick={handleClick}><FiExternalLink size={30} style={{paddingBottom:"2px",paddingRight:"5px"}} />Google</button>
                        <button type="button" className="btn btn-secondary" value={'facebook'} onClick={handleClick}><FiExternalLink size={30} style={{paddingBottom:"2px",paddingRight:"5px"}} />Facebook</button>
                        
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Btns
