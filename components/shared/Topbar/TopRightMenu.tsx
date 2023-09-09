import { trMenuLinks } from '@/constants'
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
 


const TopRightMenu = () => {
  return (
    <div className="flex justify-end items-end text-3xl py-3 text-teal">
            {trMenuLinks.map((link) => (
        <Link
        href={link.route}
        key={link.label}
        >
        <div className="mx-3">{link.label}</div>
        </Link> 
     ))}
      <SignedIn>
        <SignOutButton>
          <div className=" flex  cursor-pointer gap-4 p-4">
        <Image
                 src="/assets/logout.svg"
                 alt="logout"
                 width={24}
                 height={24}
                 className="bg-teal"
                />
                <p>logout</p>
                </div>
      </SignOutButton>
      </SignedIn>
      
      <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger:
              "py px-4"
            }
          }}
        />

    </div>
  )
}

export default TopRightMenu