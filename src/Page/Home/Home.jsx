import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Catagory from "../../Components/Caragory/Catagory";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Header/Navber/Navber";
import Slider from "../../Components/Slider/Slider";
import ExtraSectin from "../../Components/ExtraSection/ExtraSectin";
import ExtraTwo from "../../Components/ExtraSection/ExtraTwo";

const Home = () => {
  const brand = useLoaderData();
  
    return (
      <div className="bg-[#010313] ">
        <Navber></Navber>
        <Banner></Banner>
        <div className="text-center  mt-20   md:mt-40 md:mb-40 w-full lg:w-[800px]   md:w-[600px] mx-auto ">
          <h1 className="  text-[#DCAAFF] font-bold mb-5 md:text-3xl text-xl sm:text-xl lg:text-4xl">
            Your Ultimate Source for Cutting-Edge Electronics and Tech Gadgets
            Online.
          </h1>
          <h1 className="  text-gray-400 text-[15px] md:text-sm">
            {" "}
            Discover the latest in high-tech wonders at our online store. We are
            your ultimate source for cutting-edge electronics and innovative
            tech gadgets, offering the best in innovation and convenience
          </h1>
        </div>
        <div className="text-center mt-5 md:mt-10 ">
          <h1 className=" md:text-4xl text-2xl lg:text-5xl font-bold text-[#CFA0F1]">BRAND</h1>
        </div>
        <div className="grid w-full lg:grid-cols-3 duration-300 ease-in-out hover:scale-120 lg:w-[80%]  mb-20 grid-cols-1  gap-8 mx-auto mt-20">
          {brand.map((brandData) => (
            <Catagory key={brandData.id} brand={brandData}></Catagory>
          ))}
        </div>
        <ExtraSectin></ExtraSectin>
        <ExtraTwo></ExtraTwo>

        <div className="lg:block hidden">
          <Slider></Slider>
        </div>
        <Footer></Footer>
      </div>
    ); 
};

export default Home;