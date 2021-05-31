import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUserData } from './api';
//import UserContext from './usercontext';

function User() {
    let [userData, setData] = useState([]);

    useEffect(async () => {
        let user = await GetUserData();
        setData(...userData, user.data);
    },[])
    return (
        <>

            <Link to='/create' class="btn btn-primary float-right">
                Create User
            </Link>
            <br /><br />
            <hr />
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                            {
                               // console.log(userData);
                                userData.map((data)=>{
                                    return (<tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td><Link className='btn btn-warning' to={`/edit-user/${data.id}`} >Edit</Link></td>
                                    </tr>)
                                })

                            }
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;