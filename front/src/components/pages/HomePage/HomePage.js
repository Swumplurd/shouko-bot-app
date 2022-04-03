import React from 'react';
import { UserCardComponent } from '../../components/UserCardComponent/UserCardComponent';

import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <div className="row mt-5 pe-0">
          <div className="col-lg-6 col-sm-12 d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center align-items-center">
            <h1 className='fs-1 m-0'>Discord Bot para servers</h1>  
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
            <a className="fs-1 p-0 text-decoration-underline" href="/">Invitar al Servidor</a>
          </div>
      </div>
      <hr/>
      <div className="row pe-0">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <UserCardComponent />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center pe-0">
          <img src="/assets/img/shouko.png" className="shouko-img" alt="..."/>
        </div>
      </div>
    </>
  );
}