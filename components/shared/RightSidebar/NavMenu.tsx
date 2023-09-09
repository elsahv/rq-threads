'use client'

import Link from "next/link";
import { usePathname, useRouter} from'next/navigation'
import {navMenu } from '@/constants'
import Image from "next/image";
import { SignOutButton, SignedIn } from '@clerk/nextjs'
 

const NavMenu = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <>
    <div className="pt-[100px] text-IP"> 
          {navMenu.map((link) => {
             {/* //todo2: MAP */}
            const isActive = (pathname.includes(link.route) && link.route.length >
             1 || pathname === link.route)

 {/* //todo1: NEXT RETURN */}
            return (
              <Link 
              href={link.route}
              key={link.label}  
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && 'border border-teal'}`}
              >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className="p-1 bg-teal"
                />

              <p className="text-munsell max-lg:hidden">{link.label}</p>
            </Link>
            
            )}
            )}
    </div>


<div className="mt-10 px-6">
<SignedIn>
  <SignOutButton signOutCallback={() =>router.push('/sign-in')}>
    <div className="flex cursor-pointer gap-4 p-4">
      <Image
        src="/assets/logout.svg"
        alt="logout"
        width={24}
        height={24}
        className="bg-test2"
      />
         <p className='text-IP max-lg:hidden bg-black'>Logout</p>
    </div>
  </SignOutButton>
</SignedIn>
</div>
</>
  
  )
}

export default NavMenu