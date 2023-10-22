

const ExtraContract = () => {
    return (
      <div>
        <div className="flex justify-center md:mb-32 mb-2 lg:mb-52 ">
          <div className="flex flex-col justify-center  my-10 w-[90%]  max-w-7xl  ">
            <div className="flex flex-col  justify-center items-center md:items-start  my-6">
              <div className="text-xl md:text-3xl text-[#8231B3] font-bold uppercase">
                Contact Us
              </div>
              <div className="text-sm md:text-xl text-[#8231B3] font-medium">
                We are here to help.
              </div>
            </div>
            <div className="flex   flex-col justify-center items-center lg:flex-row ">
              <div className="bg-[#150F2D] hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300    flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit  my-6 mx-2">
                <div className="-mt-10 ">
                  <ion-icon
                    name="call-outline"
                    className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white  -mt-8"
                  ></ion-icon>
                </div>
                <div className="flex flex-col items-start px-8 text-[#E1AAFF]">
                  <div className="font-semibold text-2xl m-1">Call Us</div>
                  <p className="  text-lg  m-1">
                    Call us to solve your queries at any time.
                  </p>
                  <p className="  text-lg  m-1">+1 255-8997-469</p>
                </div>
              </div>
              <div className="bg-[#150F2D]  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit my-6 mx-2">
                <div className="-mt-10 ">
                  <ion-icon
                    name="chatbubble-ellipses-outline"
                    className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white  -mt-8"
                  ></ion-icon>
                </div>
                <div className="flex flex-col items-start px-8 text-[#E1AAFF]">
                  <div className="font-semibold text-2xl m-1">Chat Live</div>
                  <p className="  text-lg  m-1">
                    We are available for customer support 24X7.
                  </p>
                  <p className="  text-sm m-1 px-6 hover:bg-black hover:text-white py-2 rounded  p-5 text-black bg-white font-medium">
                    <a href="#">Chat Now</a>
                  </p>
                </div>
              </div>
              <div className="bg-[#150F2D]  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300  flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit my-6 mx-2">
                <div className="-mt-10 ">
                  <ion-icon
                    name="mail-outline"
                    className="text-3xl md:text-5xl rounded-full p-4 bg-white text-white  -mt-8"
                  ></ion-icon>
                </div>
                <div className="flex flex-col items-start px-8 text-[#E1AAFF]">
                  <div className="font-semibold text-2xl m-1">Chat Live</div>
                  <p className="  text-lg  m-1">
                    We are available for chat to solve your problems.
                  </p>
                  <p className="  text-sm m-1 px-6  hover:bg-black hover:text-white bg-white text-black py-2 rounded p-5  font-medium">
                    <a href="#">Get Started</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </div>
    );
};

export default ExtraContract;