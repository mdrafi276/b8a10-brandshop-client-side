import Banner from "../../Components/Banner/Banner";
import Navber from "../../Components/Header/Navber/Navber";

const Home = () => {
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>
        <Banner></Banner>
        <h1>this is home </h1>
      </div>
    );
};

export default Home;