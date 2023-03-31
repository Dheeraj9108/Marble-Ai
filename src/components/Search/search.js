import React from 'react'
import "./style.css"
// import { BsGlobe } from 'react-icons/bs'
import Main from '../Main/Main'
import Sidebarleft from '../SidebarLeft/Sidebarleft'
import Sidebar from '../Sidebar/sidebar'

const search = () => {
    return (
        <>
            {/* <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Admin Template</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//www.codeply.com">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left vh-100" style={{background:"black"}}>
                    {/* <Sidebar/> */}
                    <Sidebarleft/>
                    <Main/>
                </div>
            </div>



            {/* <!--/.container--> */}
            {/* <footer className="container-fluid">
                <p className="text-right small">©2016-2018 Company</p>
            </footer> */}



            {/* <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content.
                                Any content can be placed inside the modal and it can use the Bootstrap grid classes.
                            </p>
                            <p>
                                <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">Grab the code at Codeply</a>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary-outline" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default search
