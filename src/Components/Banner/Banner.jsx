import  './Banner.css'
const Banner = () => {
    return (
      <div className=" relative mt-[-4.5rem]">
        <div className="  hero min-h-screen">
          <div className=" section hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold ">
                Tech Universe Explore Innovate Inspire{" "}
              </h1>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus laborum illo, vero praesentium non.</p>
              <button className="btn text-white backdrop-blur bg-transparent">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;