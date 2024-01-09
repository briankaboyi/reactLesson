import React, { useEffect, useState } from 'react'
import getAllUsers from '../services/users.api';

function Users() {
    const [data,setData] = useState([]);

    async function getData(){
        const myData = await getAllUsers()
        setData(myData)
    }
    useEffect(() => {
      getData()
    }, [])
    return (
        <div>{data.map((user)=>{
            return(
                <div className="userCard" key={user.id} style={{ border:"1px solid"}}>

                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.data}</p>
                </div>
            )
        })}</div>
    )
}

export default Users