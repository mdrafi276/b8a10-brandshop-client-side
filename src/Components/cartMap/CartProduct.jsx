

const CartProduct = ({ productData }) => {
    
      const { name, driscription, brandName, photo, _id, rating, type, price } = productData;
  
const handleDelete = () =>{
    
    fetch(`http://localhost:5000/cart/nmnobiata@gmail.com/${_id}`,{
        method:"DELETE",
     
    }
   
    )
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
  return (
    <div>
      <div className="card h-[500px] lg:w-[300px] hover:scale-105 bg-[#140F2C] w-full text-white cursor-pointer htext-white  hover:bg-transparent hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  hover:border-white border-transparent border-2">
        <figure className="w-full h-[500px] bg-cover  md:p-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-start">
          <div className="">
            <p className="text-sm">{name} </p>
            <p className="text-sm">{brandName} </p>
            <p className="text-sm">Price:{price} $</p>
            <p className="text-sm">Rating: {rating} </p>
            <p className="text-sm">type :{type} </p>
            <p className="text-sm">{driscription} </p>
          </div>

          <button onClick={handleDelete} className="btn hover:border-2 bg-white text-black w-full  hover:bg-transparent  hover:text-white hover:backdrop-blur-2xl">
            delete
          </button>
        </div>
      </div>
    </div>
  );

};

export default CartProduct;