import { FaGoogle, FaRegEnvelope, FaUnlock } from "react-icons/fa";

import Navber from "../../Components/Header/Navber/Navber";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Login.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
const { signIn, googleLogin } = useContext(AuthContext);
const location = useLocation();
console.log("locatin page is comming  ", location);
const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
signIn(email, password)
  .then(() => {
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Something went wrong!",
     footer: '<a href="">Why do I have this issue?</a>',
   });
    navigate(location?.state ? location.state : "/");
  })
  .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    })(error);
  });
    
  };
//   google login 
const hangleGoogleLogin = () => {
  googleLogin()
    .then(() => {
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Something went wrong!",
       footer: '<a href="">Why do I have this issue?</a>',
     });
    })
    .catch();
};
  return (
    <div className="bg-[#08051A]">
      <Navber></Navber>
      <div className="body  ">
        <section>
          <div
            className="login-box"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <span className="icon">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                <input
                  className="p-5"
                  type="email"
                  name="email"
                  required
                  id=""
                />
                <label className="">Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaUnlock></FaUnlock>
                </span>
                <input type="password" name="password" required id="" />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" name="checkbox" id="" />
                  Remember Me
                </label>
              </div>
              <button className="submit-btn" type="submit">
                Login
              </button>
              <div className="register-link">
                <p>
                  Donot have an accoutn?{" "}
                  <Link to="/register" className="text-blue-600 underline">
                    Register
                  </Link>
                </p>
                <p className="">
                  <button
                    onClick={hangleGoogleLogin}
                    className="btn mt-8 hover:bg-white rounded-full hover:text-black btn-outline w-full"
                  >
                    <FaGoogle></FaGoogle>
                    Google
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
