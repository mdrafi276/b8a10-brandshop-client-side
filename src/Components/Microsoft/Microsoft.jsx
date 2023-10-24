import {  Link, useLoaderData } from "react-router-dom";
import Navber from "../Header/Navber/Navber";

const Microsoft = () => {

  const samsungData = useLoaderData();
  console.log(samsungData);
    return (
      <div className="bg-[#010313]">
        <Navber></Navber>
        <div>
          <div className="carousel w-full h-[600px] -mt-20">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/C9c7nJf/pexels-magda-ehlers-2832772.jpg"
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
                src=" https://i.ibb.co/MkqtBJ1/pexels-merlin-lightpainting-11167645.jpg"
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
                src="https://i.ibb.co/ZmX5Rg6/pexels-thirdman-7652039.jpg"
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
            True sound created by real artists captivates the soul, resonating
            with raw emotion and authenticity. These gifted musicians channel
            their experiences and passions into their music, weaving a profound
            connection between their craft and the listener is heart
          </p>
        </div>
        <div className="alert alert-info md:mt-12 w-[68%] hidden md:block mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>For more brands products you can go to the home page</span>
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
        <div className="grid w-full pb-5  md:pb-20  lg:grid-cols-3 duration-300 ease-in-out hover:scale-120   grid-cols-1  md:grid-cols-3  lg:w-[80%] gap-8 mx-auto md:mt-5 mt-4 lg:mt-14">
          {samsungData.map((samsungCard) => {
            return (
              <div
                key={samsungCard._id}
                className="card  lg:w-[300px] h-[500px] bg-[#140F2C] w-full text-white cursor-pointer hover:bg-transparent  hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  hover:scale-105 "
              >
                <figure className="w-full h[500px] bg-cover  md:p-10">
                  <img
                    src={samsungCard.photo}
                    alt="Shoes"
                    className="rounded-xl w-[67%] "
                  />
                </figure>
                <div className="card-body   ">
                  <h2 className="">{samsungCard.name}</h2>
                  <div className="">
                    <p className="text-sm">{samsungCard.brandName} </p>
                    <p className="text-sm">Price:{samsungCard.price} $</p>
                    <p className="text-sm">Rating: {samsungCard.rating} </p>
                    <p className="text-sm">type :{samsungCard.type} </p>
                    <p className="text-sm">type :{samsungCard.driscription} </p>
                  </div>
                  <div className="flex justify-between   items-center gap-2">
                    <Link to={`/productDetails/${samsungCard._id}`}>
                      <button className="btn  hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                        See mo..
                      </button>
                    </Link>
                    <Link to={`/update/${samsungCard._id}`}>
                      <button className="btn  hover:border-2 bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
//        <div>
//   <div className="bg-[#010313] h-[100vh]">
//     <Navber></Navber>

//     <div className="text-center md:mt-28  mt-32 lg:mt-40">
//       <h1 className="md:text-5xl text-3xl  lg:text-7xl font-semibold text-[#8231B3]">
//         No Data Found !!
//       </h1>
//       <h1 className="lg:text-5xl md:text-4xl font-bold  text-xl pt-2 md:pt-5  lg:pt-16 text-[#8231B3]">
//         Sorry ! No Product Available For This Brand..
//       </h1>
//     </div>
//   </div>
// </div>
    );
};

export default Microsoft;
