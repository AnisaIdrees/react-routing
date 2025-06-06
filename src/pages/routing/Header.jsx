import React from "react";
import { Link , NavLink } from "react-router";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Header = () => {

const logo={
  fontSize:'30px',
  marginLeft:'40px',
  fontWeight:'900' 
};

const iconStyle={
  paddingLeft:'10px',
  fontSize:'40px'
}

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid p-2">
          <Link className="navbar-brand" href="#"style={logo} to="/">
            Flone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-5">
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'active nav-link': 'nav-link'}aria-current="page" to='/home'>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? 'active nav-link' : 'nav-link'} aria-current="page" to= "/shop">
                  About us
                </NavLink>
              </li>
              <NavLink className={({isActive})=>isActive ? 'active nav-link': 'nav-link'} aria-current="page" to="/contactUs">
                  Contact us
                </NavLink>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'active nav-link': 'nav-link'} aria-current="page" to='/collection'>
                  Collection
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'active nav-link':'nav-link'} aria-current="page"to='/blog'>
                  Blog
                </NavLink>
              </li>

           

          
            </ul>

            <div className="d-flex ms-5 pe-4" role="search">
              <CiSearch style={iconStyle} />
              <NavLink className={({isActive})=>isActive ? "active nav-link" : 'nav-link'} to="/profile"><CiUser style={iconStyle} /></NavLink>
              <NavLink className={({isActive})=>isActive ? "active nav-link" : 'nav-link'} to="/whishlist"><CiHeart style={iconStyle} /></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
