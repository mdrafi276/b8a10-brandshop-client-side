import { useLoaderData } from "react-router-dom";
import Navber from "../../Components/Header/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const detailsData = useLoaderData();

  const { name, driscription, brandName, photo, _id, rating, type, price } =
    detailsData;
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const cartData = {
    name,
    driscription,
    brandName,
    photo,
    _id,
    rating,
    type,
    price,
    userEmail,
  };
  console.log(cartData);
  const handleAddToCart = () => {
    fetch(`http://localhost:5000/cart/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Add success!",
            footer: '<a href="">Why do I have this issue?</a>',
          })(data);
        }
      });
  };

  return (
    <div className="bg-[#010313] w-full lg:h-[700px] ">
      <Navber></Navber>

      <div className=" flex justify-center items-center mt-5 md:mt-20 ">
        <div className="card  hover:scale-105 lg:w-[400px] h-[500px] bg-[#140F2C] w-full text-white cursor-pointer hover:bg-transparent hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  hover:border-white border-transparent border-2">
          <figure className="w-full h-[350px] md:p-10 ">
            <img src={photo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body   ">
            <h2 className="">{name}</h2>
            <div className="">
              <p className="text-sm">{brandName} </p>
              <p className="text-sm">{}</p>
              <p className="text-sm"> {price} $ </p>
              <p className="text-sm">ratting</p>
              <p className="text-sm">{type}</p>
              <p className="text-sm">{driscription}</p>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn hover:border-2 w-full bg-white text-black  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
