export const navMenu = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "New Links",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Activity",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
];

const NavMenu = () => {
  return (
    <div className="pt-[100px]"> 
    {navMenu.map((item, index) => (
       <div key={index}> 
          <h2>{item.label}</h2>
       </div>
    ))}
    </div>
  
  )
}

export default NavMenu