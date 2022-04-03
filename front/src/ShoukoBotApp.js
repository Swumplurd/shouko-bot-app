import React from 'react';
import { Navbar } from './components/ui/Navbar/Navbar';
import { HomePage } from './components/pages/HomePage/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './ShoukoBotApp.css';

export const ShoukoBotApp = () => {

  return (
    <div className="container main-container">
        <Navbar/>
        <HomePage/>
    </div>
  )
}

/* 
{
                  data.map(usuario => {
                    return (
                      <>
                        <h1>{usuario.user}</h1>
                        {
                          usuario.waifu_history.map(waifu => {
                            return (
                              <img src={waifu} className="img-fluid" alt="..."/>
                            )
                          })
                        }
                      </>
                    )
                  })
                }
*/