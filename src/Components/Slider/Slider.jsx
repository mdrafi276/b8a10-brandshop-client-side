
import './Slider.css'
const Slider = () => {
    return (
      <div className="body-setion ">
        <div className="slider  ">
          <div className="slide-track ">
            <div className="slide  hover:shadow-purple-500 shadow-[0_0_50px_#00000028] duration-300    ">
              <img
                src="https://i.ibb.co/0YmPgYn/top-view-devices-supplies-composition.jpg"
                alt=""
              />
            </div>
            <div className="slide  hover:shadow-purple-500 shadow-[0_0_50px_#00000028] duration-300 ">
              <img
                src="https://i.ibb.co/ZX7XHL1/pexels-pixabay-434346.jpg"
                alt=""
              />
            </div>
            <div className="slide  hover:shadow-purple-500 shadow-[0_0_50px_#00000028] duration-300 ">
              <img
                src="https://i.ibb.co/j8ntHYN/pexels-shedrack-salami-16812192.jpg"
                alt=""
              />
            </div>
            <div className="slide  hover:shadow-purple-500 shadow-[0_0_50px_#00000028] duration-300 ">
              <img src="https://i.ibb.co/GvrsCyv/pexels-e-5050670.jpg" alt="" />
            </div>
            <div className="slide  hover:shadow-purple-500 shadow-[0_0_50px_#00000028] duration-300 hover:bg-transparent ">
              <img
                src="https://i.ibb.co/d0Pk215/pexels-nacevski-nikola-13939986.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;