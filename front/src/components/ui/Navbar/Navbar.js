import React from 'react';

import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="row pb-5 pt-3">
        <div className="col p-0">
            <nav className="nav d-flex justify-content-between">
                <div>
                    <a className="nav-link active" aria-current="page" href="/">shouko-bot</a>
                </div>
                <div className='d-flex'>
                    <a className="nav-link" href="/">Link</a>
                    <a className="nav-link" href="/">Link</a>
                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                </div>
            </nav>
        </div>
    </div>
  )
}