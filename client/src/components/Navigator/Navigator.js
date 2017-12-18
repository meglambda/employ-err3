import React from 'react';
import '../../css/creative.min.css';
import '../../vendor/magnific-popup/magnific-popup.css';
import './Navigator.css';


function Navigator(props) {
	return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark scrolling-navbar">
          <a className="navbar-brand" style={{color:"#EE5F46" }} href="/"><strong>Employ{'{err}'}</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
               <strong> <a className="nav-link" style={{display: props.none}} href="/employee">Employee Login</a></strong>
              </li>
              <li className="nav-item active">
                <strong><a className="nav-link" style={{display: props.none}} href="/employer">Employer Login</a></strong>
              </li>
              <li className="nav-item active">
                <strong><a className="nav-link" style={{display: props.home}} onClick={() => props.openNav()}>Profile</a></strong>
              </li>
              <li className="nav-item active">
                <strong><a className="nav-link" style={{display: props.home}}href="/">Logout</a></strong>
              </li>
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-facebook" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-twitter" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-instagram" /></a>
              </li>
            </ul>
          </div>
        </nav>
	)
}

export default Navigator;