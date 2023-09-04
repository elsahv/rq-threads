import Image from "next/image";
import Temp1 from "../../public/assets/temp1.jpg";
import Temp2 from "../../public/assets/temp2.jpg";
import Temp3 from "../../public/assets/temp3.jpg";
import Temp4 from "../../public/assets/temp4.jpg";
import Temp5 from "../../public/assets/temp5.jpg";
import Temp6 from "../../public/assets/temp6.jpg";



const cardContent = [
  {
    id: 1,
    title: "Journal Demo",
    image: Temp1,
    paragraph:"- view website for small business, located in San Bernardino CA.",
    categories: "categories",
    url: "https://google.com",
  },
  {
    id: 2,
    title: "Horizontal Layout Demo",
    image: Temp2,
    paragraph: "- view website for small business, located in Redlands CA. rporis aut autem porro saepe modi atque voluptates expedita! ",
    categories: "categories",
    url: "https://hoveyroofing.com",
  },
  {
    id: 3,
    title: "Blog-Right Sidebar Demo",
    image: Temp3,
    paragraph: "-  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio corporis, illo aliquam vitae nisi perferendis suscipit quam neque, ea soluta distinctio tempore quo et dicta.",
    categories: "categories",
    url: "https://lc-blog-right-sidebar-demo.vercel.app/",
  },
  {
    id: 4,
    title: "Business Hero Demo!",
    image: Temp4,
    paragraph: "- view website for small business, located in Redlands CA.",
    categories: "categories",
    url: "https://hoveyroofing.com",
  },
  {
    id: 5,
    title: "Plants Blog Demo",
    image: Temp5,
    paragraph:"-  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio corporis, illo aliquam vitae nisi perferendis suscipit quam neque, ea soluta distinctio tempore quo et dicta.",
    categories: "categories",
    url: "https://google.com",
  },

  {
    id: 6,
    title: "Photography Layout Demo",
    image: Temp6,
    paragraph: "- view website for small business, located in Redlands CA. rporis aut autem porro saepe modi atque voluptates expedita! ",
    categories: "categories",
    url: "https://photography-demo-xi.vercel.app/",
  },
];

const ThreadCards = () => {
  return (
    <section className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mr-5 px-[25px] py-[50px]">
      {cardContent.map((item, index) => (
        <div className="bg-teal rounded-lg border border-black" key={index}>
          <div className="underline pl-5 pt-2 text-seasalt">tags</div>

          <Image className="py-1 px-5 h-[350px]" src={item.image} alt="" />
          <div className="px-5 pb-5">
            <h2 className="text-lavender font-bold pb-2 mt-2">{item.title}</h2>
            <p className="pb-5">{item.paragraph}</p>

            <span className="drop-shadow bg-munsell text-seasalt p-1 rounded-md mt-5">
              {item.categories}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThreadCards;