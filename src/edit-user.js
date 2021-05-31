import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {GetUserById, PostUserById} from './api';

function EditUser(props){
    let ID = props.match.params.id
    let [userName,setUsername] = useState('');
    let [userEmail,setUserEmail] = useState('');
    let userData ={
        name : userName,
        email : userEmail
    }

    useEffect(async()=>{
        let user = await GetUserById(ID);
        setUsername(user.data.name);
        setUserEmail(user.data.email)
    },[])
    
    return (
        <>
            <form>
            <div className='col-8 offset-2'>
                <div className='form-group'>
                    <label for='name'>Name</label>
                    <input className='form-control' placeholder='name' value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>

                    <label for='Email'>Email</label>
                    <input className='form-control' placeholder='Email' value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    <button className='btn btn-primary col-12' to='/user' onClick={async()=>{await PostUserById(ID,userData) }}>Edit</button>
                    
                </div>
            </div>
            </form>
        </>
    )
}

export default EditUser;