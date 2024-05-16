"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

const SignInLogin = ({user}) => {
    const router = useRouter();
  const { user , isLoaded } = useUser();
    useEffect(() =>{
        if(user){
            router.push("/dashboard")
        }else{
           isLoaded && router.push('sign-in')
        }
    }, [])
  return (
    <div>SignInLogin</div>
  )
}

export default SignInLogin