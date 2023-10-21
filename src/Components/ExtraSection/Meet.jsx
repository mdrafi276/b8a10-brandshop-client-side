
const Meet = () => {
    return (
      <div>
        <div className="flex items-center justify-center lg:mb-32 md:mt-32 mt-6 lg:mt-52  md:mb-16  mb-14 text-center">
          <div className="flex flex-col p-2 m-2  ">
            <div className="text-3xl text-[#9438CA] md:mt-2 font-medium">
              Meet Our Team
            </div>
            <div className="text-sm mx-2 md:text-xl mr-[3.5rem] md:mr-0 text-[#DDA7FA]">
              Meet the team member who have contributed their designs for this
              websites.
            </div>
            <div className="text-sm mx-2 md:text-xl mb-2 md:mt-2 text-[#DDA7FA]">
              Resource person of Tailblocks communinty
            </div>
            <div className="md:grid flex md:mt-8">
              <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
                <div className="flex-col px-6 py-2  max-w-7xl">
                  <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200 hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 ">
                    <img
                      src="https://source.unsplash.com/300x300/?man,businessman"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 font-medium text-[#DDA7FA] cursor-pointer hover:text-[#DDA7FA]">
                    John Doe
                  </div>
                  <div className=" italic text-[#DDA7FA]">CEO, Tailblocks</div>
                </div>
                <div className="flex-col px-6 py-2 ">
                  <div className="md:h-40   hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://source.unsplash.com/300x300/?boy"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 font-medium text-[#DDA7FA] cursor-pointer hover:text-[#fff]">
                    Arkay
                  </div>
                  <div className=" italic text-[#DDA7FA]">
                    Executive Producer
                  </div>
                </div>
                <div className="flex-col px-6 py-2   ">
                  <div className="md:h-40 h-28 w-28 md:w-40 hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://source.unsplash.com/300x300/?girl"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-[#DDA7FA] cursor-pointer hover:text-[#ff]">
                    Elina Gilbert
                  </div>
                  <div className=" italic text-[#DDA7FA]">HR</div>
                </div>
              </div>
              <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
                <div className="flex-col px-6 py-2 ">
                  <div className="md:h-40 h-28  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://source.unsplash.com/300x300/?kid"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-[#DDA7FA] cursor-pointer hover:text-[#fff]">
                    Clay Johnson
                  </div>
                  <div className=" italic text-[#DDA7FA]">Manager</div>
                </div>
                <div className="flex-col px-6 py-2 ">
                  <div className="md:h-40 h-28  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 w-28 md:w-40 rounded-full overflow-hidden bg-[#DDA7FA]">
                    <img
                      src="https://source.unsplash.com/300x300/?girl,woman"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-[#DDA7FA] cursor-pointer hover:text-[#fff]">
                    Hannah Saw
                  </div>
                  <div className=" italic text-[#DDA7FA]">
                    Marketing Producer
                  </div>
                </div>
                <div className="flex-col px-6 py-2 ">
                  <div className="md:h-40 h-28  hover:scale-105   hover:shadow-sky-400 shadow-[0_0_50px_#00000028] duration-300 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="https://source.unsplash.com/300x300/?woman"
                      alt=""
                      className=""
                    />
                  </div>

                  <div className="text-lg font-medium text-[#DDA7FA] cursor-pointer hover:text-[#DDA7FA]">
                    Wednesday Addams
                  </div>
                  <div className=" italic text-[#DDA7FA]">Financer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
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

export default Meet;