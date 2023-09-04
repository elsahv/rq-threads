import Image from "next/image";
import Link from "next/link";

export const navMenu = [
  {
    imgURL: "/assets/home.svg",    //todo: IMPLEMENT??
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",   //todo: IMPLEMENT??
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/heart.svg",   //todo: IMPLEMENT??
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",   //todo: IMPLEMENT??
    route: "/communities",
    label: "Communities",
  },
];

const NavMenu = () => {
  return (
    <div className="pt-[100px] text-IP"> 
    {navMenu.map((link) => (
 
     <Link
      href={link.route}
      key={link.label}
      >
      <div className="font-bold text-3xl my-1 py-1">{link.label}</div>
     </Link> 
   
        
   
   ))}
    </div>
  
  )
}

export default NavMenu