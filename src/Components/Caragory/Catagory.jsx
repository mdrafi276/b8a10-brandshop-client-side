import { Link } from "react-router-dom";

const Catagory = ({ brand }) => {

  console.log(brand);
  const {id, name, image}=brand;
  return (
    <div>
      <Link to={name}>
        <div className="card  hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  hover:scale-105  lg:mb-20 lg:w-[320px] bg-[#140F2C] w-full text-white cursor-pointer hover:bg-transparent ">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Catagory;