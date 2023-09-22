import React from "react";
import { Link } from "react-router-dom";

import GuviBlogLogo from '../assets/GuviBlogLogo.png'

export default function Navbar() {

    return (
  <nav className="navbar text-center navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img width="121" height="53" src={GuviBlogLogo} alt="Guvi-blog-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto justify-content-center">
        <li className="nav-item me-3">
          <Link className="nav-link active" aria-current="page" href="#!">COURSES</Link>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LIVE CLASSES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Zen Class</Link></li>
            <li><Link className="dropdown-item" href="#!">FullStack Development Program</Link></li>
            <li><Link className="dropdown-item" href="#!">Automation & Testing Program</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRACTICE
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Codekata</Link></li>
            <li><Link className="dropdown-item" href="#!">Webkata</Link></li>
            <li><Link className="dropdown-item" href="#!">IDE-Online Compiler</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           RESOURCES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Rewards</Link></li>
            <li><Link className="dropdown-item" href="#!">Referral</Link></li>
            <li><Link className="dropdown-item" href="#!">Forum Support</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR PRODUCTS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Hacker Kid</Link></li>
            <li><Link className="dropdown-item" href="#!">GUVI for Corporate</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}