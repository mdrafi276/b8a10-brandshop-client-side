import {  useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import userDefaultPic from "../../../../src/assets/user.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
      logOut().then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully SignOut From Your Account",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch();
    };

     const navLink = (
       <>
         <li>
           <NavLink
             className={({ isActive, isLoading }) =>
               isLoading ? "loading" : isActive ? "text-black bg-white hover:text-white " : ""
             }
             to="/"
           >
             Home
           </NavLink>
         </li>
         <li>
           <NavLink
             className={({ isActive, isLoading }) =>
               isLoading ? "loading" : isActive ? "text-black bg-white hover:text-white " : ""
             }
             to="/addPorduct"
           >
             AddProducts
           </NavLink>
         </li>
         <li>
           <NavLink
             className={({ isActive, isLoading }) =>
               isLoading ? "loading" : isActive ? "text-black bg-white hover:text-yellow-300" : ""
             }
             to="/myCart"
           >
             My Cart
           </NavLink>
         </li>
         <li>
           <NavLink
             className={({ isActive, isLoading }) =>
               isLoading ? "loading" : isActive ? "text-black bg-white  hover:text-yellow-300" : ""
             }
             to="/register"
           >
             Register
           </NavLink>
         </li>
       </>
     );

    return (
      <div className="backdrop-blur sticky z-20 top-0 ">
        <div id="header-nav" className="  text-white bg-transparent  ">
          <div className="  md:-w-full lg:max-w-6xl mx-auto">
            <div className="navbar rounded-lg">
              <div className="navbar-start">
                <h1
                  id="title-h1"
                  className="lg:text-2xl gap-2 flex items-center md:text-xl text-[15px] "
                >
                  {" "}
                  <span>
                    <img
                      className="w-10 rounded-full"
                      src="https://i.ibb.co/x6ptv69/download-removebg-preview.png"
                      alt=""
                    />
                  </span>
                  <span>ElectroElegance</span>
                </h1>
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {navLink}
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal px-1">{navLink}</ul>
              </div>
              <div className="navbar-end ">
                <p>hello</p>
                {user && (
                  <p className="md:mr-5 text-[10px] md:text-[12px] lg:text-[15px] font-bold">
                    {user.displayName}
                  </p>
                )}
                <label
                  tabIndex={0}
                  className=" md:mr-5 btn btn-ghost btn-circle avatar"
                >
                  <img
                    className="rounded-full "
                    src={user?.photoURL ? user.photoURL : userDefaultPic}
                    alt=""
                  />
                </label>

                {user ? (
                  <div>
                    <button
                      onClick={handleSignOut}
                      className="btn backdrop-blur bg-transparent  text-white hover:text-black "
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn backdrop-blur bg-transparent bg-white hover:bg-black hover:text-white ">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navber;