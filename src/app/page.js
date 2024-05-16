
"use client"
import { UserButton , useUser} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const Home = () => {
  //const {userId } = auth();
  const router  = useRouter();
  const { user } = useUser();
 useEffect(()=>{
  if(user){
    router.push('/dashboard')
  }else{
    router.push('/courses')
  }
 }, [user])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
      <UserButton afterSignOutUrl="/sign-in"/>
    
    </main>
  );
}


export default Home; 