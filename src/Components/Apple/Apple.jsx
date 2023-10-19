import { Link } from 'react-router-dom';
import Navber from '../Header/Navber/Navber';

const Apple = () => {
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>
        <div>
          <div className="carousel w-full h-[600px] -mt-20">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/wCbT56f/pexels-jonathan-borba-14263441.jpg"
                className="w-full"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src=" https://i.ibb.co/rskBCWG/pexels-akaaljotsingh-anandpuria-10885665.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/zHPW7r0/pexels-zana-latif-4716356.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* text title  */}
        <div className="lg:w-[800px] md:ml-[12rem] md:w-[400px] ml-[6.75rem] w-[200px]  text-center lg:ml-[16rem]   absolute text-white -mt-96">
          <h1 className="  font-bold md:text-[30px] text-[25px] lg:text-[40px]">
            true sound created by real artlsls
          </h1>
          <p className="pt-2 lg:text-sm md:text-sm text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem
            dicta nihil aliquam commodi necessitatibus minima voluptatem
            voluptate ex iure Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores ratione doloribus molestias placeat praesentium quo
            ipsam aut, similique quam obcaecati..
          </p>
        </div>
        {/* card  */}
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
        <div className="grid w-full lg:grid-cols-3 duration-300 ease-in-out hover:scale-120   grid-cols-1  md:grid-cols-3  lg:w-[80%] gap-8 mx-auto md:mt-5 mt-4 lg:mt-14">
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
                <Link to="/priductDetails">
                  <button className="btn hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                    See mo..
                  </button>
                </Link>
                <Link to="/update">
                  <button className="btn hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Apple;