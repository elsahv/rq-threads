import React from 'react'


export const trMenuLinks = [
    {
      label: 'Home',
    },
    {
        label: 'Profile',
    },
    {
        label: 'Search',
      },
      {
          label: 'About',
      },
      {
        label: 'Contact',
      },
]


const TopRightMenu = () => {
  return (
    <div className="flex justify-end items-end text-3xl py-3">
      {trMenuLinks.map((item, index) => (
        <div key={index}>
            <h2 className="mx-3">
            {item.label}
                </h2>  
        </div>
     ))}
    </div>
  )
}

export default TopRightMenu