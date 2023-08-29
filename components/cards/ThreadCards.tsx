import Image from "next/image";
import content from "../data";

const ThreadCards = () => {
  return (
    <section className=" grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-5">
      {content.map((item, index) => (
        <div className="bg-teal rounded-lg" key={index}>
          <div className="underline pl-5 pt-2 text-seasalt">tags</div>

          <Image className="py-1 px-5 h-[300px]" src={item.image} alt="" />
          <div className="px-5 pb-5">
            <h2 className="text-lavender font-bold pb-2">{item.title}</h2>
            <div className="py-2">{item.paragraph}</div>

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