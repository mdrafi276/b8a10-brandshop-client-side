import { Link } from "react-router-dom";
import Navber from "../../Components/Header/Navber/Navber";

const ProductDetails = () => {
    return (
      <div className="bg-[#010313] md:h-[700px] ">
        <Navber></Navber>
        <div>
          <div className="text-center  md:mt-1  mt-1 lg:mt-1">
            <h1 className="text-4xl font-bold text-white">Add Product</h1>
            <Link to="/addPorduct">
              <div className="mt-4 ">
                <button className="btn hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                  Add Porduct
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-[23%] mx-auto mt-10 ">
          <div className="card  lg:w-[300px] bg-[#140F2C] w-full text-white cursor-pointer hover:bg-transparent shadow-xl hover:border-2">
            <figure className="">
              <img
                src="https://i.ibb.co/7ttkvQg/business-executives-show-their-approval-by-raising-hands.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body   ">
              <h2 className="">Gaaxy s23</h2>
              <div className="">
                <p className="text-sm">Lorem ipsum dolor sit amet. </p>
                <p className="text-sm">Sumsung</p>
                <p className="text-sm"> 1212 $ </p>
                <p className="text-sm">Rating : </p>
                <p className="text-sm">phone</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                
                  <button className="btn hover:border-2 w-full bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                    Add To Cart
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;