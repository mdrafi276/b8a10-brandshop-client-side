import { useContext, useEffect, useState } from 'react';
import Navber from '../../Components/Header/Navber/Navber';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import CartProduct from '../../Components/cartMap/cartProduct';

const MyCart = () => {
const { user } = useContext(AuthContext);
const userEmail = user.email;
console.log(userEmail);
const [product, setProduct] = useState([]);
useEffect(() => {
  fetch(`http://localhost:5000/cart/${userEmail}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
}, [userEmail]);
return (
  <div className="bg-[#010313] h-[100%]">
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
    <div className="grid w-full pb-5 md:pb-20 lg:grid-cols-3 duration-300 ease-in-out hover:scale-120   grid-cols-1  md:grid-cols-3  lg:w-[80%]  justify-center gap-8 mx-auto md:mt-5 mt-4 lg:mt-14">
      {product.map((productData) => (
        <CartProduct
          key={productData._id}
          productData={productData}
        ></CartProduct>
      ))}
    </div>
  </div>
);


};

export default MyCart;