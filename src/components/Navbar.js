import React from 'react';
import PropTypes from 'prop-types';
// import {NavLink} from 'react-router-dom';

export default function Navbar(props){
    return(
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            {/* <NavLink className="navbar-brand" to="/">{props.title}</NavLink> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <NavLink className="nav-link active" aria-current="page" to="/">{props.home}</NavLink> */}
                    <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                </li>
                <li className="nav-item">
                    {/* <NavLink className="nav-link active" to="/about">{props.about}</NavLink> */}
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    {/* <div className="bg-primary rounded mx-2" onClick={() => {props.changingMode('primary')}} style={{height: '30px', width: '30px', cursor: "pointer", border: "1px solid white"}}></div>
                    <div className="bg-danger rounded mx-2" onClick={() => {props.changingMode('danger')}} style={{height: '30px', width: '30px', cursor: "pointer", border: "1px solid white"}}></div>
                    <div className="bg-success rounded mx-2" onClick={() => {props.changingMode('success')}} style={{height: '30px', width: '30px', cursor: "pointer", border: "1px solid white"}}></div>
                    <div className="bg-warning rounded mx-2" onClick={() => {props.changingMode('warning')}} style={{height: '30px', width: '30px', cursor: "pointer", border: "1px solid white"}}></div> */}
                    {/* <div className="bg- rounded mx-3"></div>
                    <div className="bg-primary rounded mx-3"></div>
                    <div className="bg-primary rounded mx-3"></div> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={() => {props.changingMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode} Mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
}



Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    about: "Set about here",
    home: "This is Home",
    contact: "Get in touch"
}