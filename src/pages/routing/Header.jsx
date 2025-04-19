import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Header = () => {

  return (
<>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid p-2">
    <a className="navbar-brand" href="#">Flone</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-5">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Shop</a>
        </li>    

            <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Collection</a>
        </li>


            <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact us</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pages</a></li>
            <li><a className="dropdown-item" href="#">Services</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search">
      <CiSearch />
      <CiUser />
      <CiHeart />
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Header
