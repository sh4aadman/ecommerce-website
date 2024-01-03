import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`hero min-h-[60vh] bg-[url(/src/assets/resources/hero-bg.jpg)]`}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md grid grid-cols-2 items-center gap-x-10">
          <Link to='/collection'><button className="bg-black text-white py-5 px-7">Browse Collections</button></Link>
          <h1 className="mb-5 text-5xl font-bold text-left w-full"><span className="text-7xl font-semibold italic">Dates Shop</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
