import Link from 'next/link'
import React from 'react'


export const trMenuLinks = [
    // {
    //   route: "/",
    //   label: 'Home',
    // },
    {
      route: "/profile",
      label: 'Profile',
    },
    {
      route: "/search",
      label: 'Search',
      },
      {
        route: "/about",
        label: 'About',
      },
      {
        route: "/contact",
        label: 'Contact',
      },
]


const TopRightMenu = () => {
  return (
    <div className="flex justify-end items-end text-3xl py-3 text-IP">
      {trMenuLinks.map((link) => (
        <Link
        href={link.route}
        key={link.label}
        >
        <div className="mx-3">{link.label}</div>
        </Link> 
     ))}
    </div>
  )
}

export default TopRightMenu