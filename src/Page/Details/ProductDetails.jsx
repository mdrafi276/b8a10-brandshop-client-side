import { useLoaderData } from "react-router-dom";
import Navber from "../../Components/Header/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";

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
    fetch(`https://b8a10-brandshop-server-side-mdrafi276.vercel.app/cart/`, {
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
              <h2 className="card-title">
                {" "}
                <Rating
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  initialRating={rating}
                  readonly
                />
              </h2>
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
