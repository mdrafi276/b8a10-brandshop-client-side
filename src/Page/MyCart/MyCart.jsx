import Navber from '../../Components/Header/Navber/Navber';
import { Link } from 'react-router-dom';

const MyCart = () => {
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>

        <div className="text-center  md:mt-8  mt-2 lg:mt-16">
          <h1 className="text-4xl font-bold text-white">All Product</h1>
          <Link to="/addPorduct">
            <div className="mt-4 ">
              <button className="btn hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                Add Porduct
              </button>
            </div>
          </Link>
        </div>
        <div className="grid w-full lg:grid-cols-4 duration-300 ease-in-out hover:scale-120   grid-cols-1  md:grid-cols-3  lg:w-[80%] gap-8 mx-auto md:mt-5 mt-4 lg:mt-14">
          <div className="card  lg:w-[240px] bg-[#140F2C] w-full text-white cursor-pointer hover:bg-transparent shadow-xl hover:border-2">
            <figure className="">
              <img
                src="https://i.ibb.co/7ttkvQg/business-executives-show-their-approval-by-raising-hands.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button  className="btn hover:border-2 bg-white text-black w-full  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyCart;