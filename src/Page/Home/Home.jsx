import Banner from "../../Components/Banner/Banner";
import Catagory from "../../Components/Caragory/Catagory";
import Navber from "../../Components/Header/Navber/Navber";

const Home = () => {
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>
        <Banner></Banner>
       <Catagory></Catagory>
      </div>
    );
};

export default Home;