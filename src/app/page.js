
import { UserButton , useUser} from "@clerk/nextjs";
import Image from "next/image";
import SignInLogin from '../components/SignInLogin'
export default function Home() {
  const {user} = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      
      <UserButton afterSignOutUrl="/sign-in"/>
      <SignInLogin user={user}/>
    </main>
  );
}
