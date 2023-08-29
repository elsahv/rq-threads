'use client'

// import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
// import { JakeImg } from "../assets/jake.jpg";
const RightSideBar = () => {
  return (
    <div className="pb-5 bg-teal-300 border-l-2 border-black">
      <div className="flex flex-col pt-5 pl-3">
        <h2 className="mt-5 font-bold text-3xl">Welcome to the Running Quail!</h2>
        <div className="p-1 mr-3 mt-[20px]">
          content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni iste fugit sit rerum voluptatem quisquam tempore mollitia earum
          nobis et, voluptatibus numquam quas officia accusamus aut voluptas!
          Voluptas, deleniti culpa.
        </div>


        <ul>
           <li className="pt-[100px] font-bold">New Links</li>
            {/* <li>Home</li> */}
            {/* <li>Search</li> */}
            <li>Activity</li>
            <li>Create Thread</li>
            <li>Communities</li>
            {/* <li>Profile</li> */}
          </ul>



        <div>
          {/* <img src={JakeImg} alt="" className="w-[100px] h-[200px]" /> */}
        </div>
        <div className="mt-[150px]">
          <h2 className="underline text-2xl font-bold">Categories</h2>
          <ul>
            <li>cat 1</li>
            <li>cat 2</li>
            <li>cat 3</li>
            <li>cat 4</li>
          </ul>



          <ul>
           <li className="pt-[100px] font-bold">Other new links</li>
            <li>Suggested Communities</li>
            <li>Suggested Users</li>
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;