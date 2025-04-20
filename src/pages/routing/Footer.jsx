import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="container-xxl footer d-flex justify-content-around flex-wrap">
        <div className="mx-5">
          <h1 className="fw-bold mx-5">Flone</h1>
          <p className="fs-6 pe-4 mx-5">
            © 2025 Flone <br />
            All Rights Reserved
          </p>
        </div>
        <div>
          <ul>
            <li className="nav-item footerLink fw-bold fs-6"> ABOUT US</li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="/about us"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="/contactUs"
            >
              Contact us
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="/shop"
            >
            Shop
            </NavLink>
          </li>
          </ul>
        </div>
        <div>
        <ul>
            <li className="nav-item footerLink fw-bold fs-6"> USEFUL LINKS</li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link" : "nav-link"
              }
              aria-current="page"
              
            >
              Returns
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? " nav-link" : "nav-link"
              }
              aria-current="page"
              
            >
            Support Policy
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link" : "nav-link"
              }
              aria-current="page"
              
            >
              Size guide
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? " nav-link" : "nav-link"
              }
              aria-current="page"
              to="/faq"
            >
            FAQ
            </NavLink>
          </li>
          </ul>
        </div>
        <div>
        <ul>
            <li className="nav-item footerLink fw-bold fs-6"> FOLLOW US</li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="https://www.facebook.com/"
            >
              Facebook
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="https://www.instagram.com/"
            >
              Instagram
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="https://www.facebook.com/"
            >
              Twitter
            </NavLink>
          </li>
          <li className="nav-item footerLink">
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page"
              to="https://www.youtube.com/"
            >
            Youtube
            </NavLink>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
