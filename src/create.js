import React, { useContext,useState } from 'react';
import {PostUserData} from './api'
import { Link } from 'react-router-dom';
import UserContext from './usercontext'

function Create() {
    let [userName,setUsername] = useState('');
    let [userEmail,setUserEmail] = useState('')
    let users = useContext(UserContext)
    let userData = {
       name : userName,email : userEmail
    }
    return (
        <>
            <div className='col-8 offset-2'>
                <div className='form-group'>
                    <label for='name'>Name</label>
                    <input className='form-control' placeholder='name' value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>

                    <label for='Email'>Email</label>
                    <input className='form-control' placeholder='Email' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <Link className='btn btn-primary col-12' to='/user' onClick={async ()=>{await PostUserData(userData)}}>Add User</Link>
                </div>
            </div>
        </>
    )
}

export default Create;