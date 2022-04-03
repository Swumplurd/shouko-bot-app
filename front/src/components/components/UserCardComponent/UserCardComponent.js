import React, { useState } from 'react';
import { useFetchWaifu } from '../../../hooks/useFetchWaifu';

import './UserCardComponent.css'

export const UserCardComponent = () => {
  const [currentUser, setCurrentUser] = useState('349394307960143882')
  const {data} = useFetchWaifu();
  
  const handleUserChange = (e) => {
    setCurrentUser(e.target.value)
  }
  
  return (
    <div className='d-flex flex-column justify-content-between'>  
        <form className="my-5">
            <select className="form-select" onChange={handleUserChange} value={currentUser}>
                {
                    data.map(user => <option className='text-dark' key={user.id} value={user.id}>{user.user}</option>)
                }
            </select>
        </form>
        <div className="text-white bg-card text-center">
            {
                data.map(user => {
                    return user.id === currentUser && (
                        <div key={user.id} className="text-dark">
                            <img src={user.user_avatar} className="avatar-img mt-3" alt="..."/>
                            <div className="card-body text-dark">
                                <h5 className="card-title">{user.user}</h5>
                                <div className='d-flex justify-content-between'>
                                    {
                                        user.waifu_history.map((waifu, i) => i <= 2 && <img src={waifu} key={i} className="img-thumbnail-waifu" alt="..."/>)
                                    }
                                </div>
                            </div>
                        </div>
                    ) 
                })
            }
        </div>
    </div>
  )
}
/* 
<>
                        <img src="" className="card-img" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{user.user}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </>
*/