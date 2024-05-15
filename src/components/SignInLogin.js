"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
const SignInLogin = ({user}) => {
    const router = userRouter();

    useEffect(() =>{
        if(user){
            router.push("/dashboard")
        }else{
            router.pus('sign-in')
        }
    }, [])
  return (
    <div>SignInLogin</div>
  )
}

export default SignInLogin