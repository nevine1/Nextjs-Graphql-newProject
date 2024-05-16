
 "use client"
import React, { use } from 'react'
import { useUser } from '@clerk/nextjs'
const Dashboard = () => {
  const { user , isLoaded} = useUser();
  console.log(user)
  //console.log(user.externalAccounts.fullname)
  return (
    <div>
        <h1>Hello Dashboard</h1>
       {/*  <h1>My name is : {user.externalAcconts.fullname}</h1> */}
    </div>
  )
}

export default Dashboard