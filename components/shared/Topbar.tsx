import React from 'react'

const Topbar = () => {
  return (
    <header className="border-b-2 border-black bg-white relative top-0 z-100 w-[100%] h-[100px]" >
    <nav className="px-5 h-[100%] grid grid-cols-2">
      <section className="flex justify-start items-end py-3 pl-1">
        <div id="logo" className="text-4xl font-bold ">
          The Running Quail 
        </div>
      </section>
      <section className="flex justify-end items-end text-3xl py-3">

        <div className="mx-2">Home</div>
        <div className="mx-2">Profile</div>
        <div className="mx-2">Search</div>
        <div className="mx-2">about</div>
        <div className="mx-2">contact</div>
      </section>
    </nav>
  </header>
  )
}

export default Topbar