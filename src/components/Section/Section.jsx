import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="max-w-5xl mx-auto p-10 space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative bg-[url(/src/assets/resources/shop.jpg)] bg-cover bg-center bg-no-repeat flex justify-center items-center bg-opacity-25 h-[550px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50 w-full"></div>
          <h2 className="absolute text-white bg-black text-5xl py-3 px-5">
          <Link to='/cart'>Shop</Link>
          </h2>
        </div>
        <div className="relative bg-[url(/src/assets/resources/blog.jpg)] bg-cover bg-center flex justify-center items-center bg-opacity-25 h-[550px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50 w-full"></div>
          <h2 className="absolute text-white bg-black text-5xl py-3 px-5">
          <Link to='/blog'>Blog</Link>
          </h2>
        </div>
      </div>
      <div>
        <div className="relative bg-[url(/src/assets/resources/collection.jpg)] bg-cover bg-center flex justify-center items-center bg-opacity-25 h-[550px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50 w-full"></div>
          <h2 className="absolute text-white bg-black text-5xl py-3 px-5">
            <Link to='/collection'>Collection</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
