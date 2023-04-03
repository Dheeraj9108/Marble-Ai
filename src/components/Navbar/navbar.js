import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {MdOutlineDateRange} from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'

const Navbar = () => {
    const  [searchParams,setSearchParams] = useSearchParams();
    const handleSearch =(e)=>{
        
    }

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

                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchParams({name:e.target.value})}} />
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
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle"  style={{borderRadius:"0px"}} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsGlobe size={25} style={{paddingBottom:"2px",paddingRight:"5px"}}/>Language
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        
                        <button type="button" className="btn btn-outline-success">Primary</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar
