import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Header/Navber/Navber";

const Home = () => {
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    );
};

export default Home;