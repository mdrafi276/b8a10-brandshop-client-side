import  './Banner.css'
const Banner = () => {
    return (
      <div className=" relative mt-[-4.4rem]">
        <div className="  hero w-full md:min-h-screen">
          <div className=" section hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" w-full md:max-w-md  bg-transparent">
              <h1 className="mb-5 text-5xl font-bold  text-white ">
                Experience the future with our online emporium{" "}
              </h1>
              <p className="mb-5">
                 offering the
                latest innovations in electronics and technology gadgets. Your
                ultimate destination for all things high-tech.
              </p>
              <button className="btn text-white hover:text-black backdrop-blur bg-transparent">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;