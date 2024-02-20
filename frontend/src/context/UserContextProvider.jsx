import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [user,setUser]=useState({
        user:"Roshan Chaudhary",
        userImage:"/photos/Dashboard/dummy.jpeg",
        userEmail:"chaudharyrhan@gmail.com",
    })
    const [expand,setExpand]=useState(false)
    return(
        <UserContext.Provider value={{expand,setExpand,user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;