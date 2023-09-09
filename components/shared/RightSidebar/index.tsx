'use client'

import Image from "next/image";
// import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import NavMenu from "./NavMenu";
import Categories from "./Categories";
import Suggested from "./Suggested";
import Intro from "./Intro";

const RightSideBar = () => {
  return (
    <div className="h-full pb-5 border-l-2 border-black bg-[#edede9]">
      <div className="flex flex-col pt-5 pl-3">
       <Intro />
       <NavMenu />
       <Categories />
       <Suggested />
      </div>
    </div>
  );
};

export default RightSideBar;