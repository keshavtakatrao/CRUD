import React,{useState} from 'react';
let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children})=>{
    let [userList,setList] = useState([]);

    return <UserContext.Provider value ={{userList,setList}}>
        {children}
    </UserContext.Provider>
}
