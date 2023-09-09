import React from 'react'
import TopRightMenu from './TopRightMenu'
import Logo from './Logo'



const Topbar = () => {
  return (
    <header className="border-b-2 border-black bg-[#edede9] relative top-0 z-100 w-[100%] h-[100px]" >
    <nav className="px-5 h-[100%] grid grid-cols-2">
    <Logo />
    <TopRightMenu />
    </nav>
  </header>
  )
}

export default Topbar