function NavBar() {
  return (
    <div className="absolute pt-5 w-full flex justify-between font-bold font-TeslaFont items-center z-10">
      <div className="ml-8">
        <svg
          className="w-32 cursor-pointer"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex space-x-2 text-sm">
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Model S
          </li>
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Model 3
          </li>
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Model X
          </li>
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Model Y
          </li>
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Solar Roof
          </li>
          <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
            Solar Panels
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex space-x-4 mr-2 text-sm">
          <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
            Shop
          </li>
          <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
            Account
          </li>
          <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
            Menu
          </li>
        </ul>
      </div>
      <div className="flex flex-col absolute top-[70px] left-[50%] translate-x-[-50%] lg:top-[120px] xl:top-[200px]">
        <h1 className="text-[28px] m-auto font-bold sm:text-[40px]">Model 3</h1>
        <p className="whitespace-nowrap pt-1 text-[12px] text-slate-300 sm:text-[16px] ">
          Order Online for
          <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer pl-1">
            Touchless Delivery
          </span>
        </p>
      </div>
      <div className="absolute -bottom-48 left-[50%] translate-x-[-30%] sm:translate-x-[-35%] sm:-bottom-80 lg:translate-x-[-50%] md:translate-x-[-30%] lg:-bottom-[450px] xl:-bottom-[700px] xl:translate-x-[-40%]">
        <button className="uppercase bg-gray-800 w-36 text-white text-[12px] rounded-full h-8 sm:w-60 sm:text-[16px] mr-2 lg:h-10">
          Custom order
        </button>
        <button
            class="my-2 uppercase bg-slate-200 w-36 text-gray-900 text-[12px] rounded-full h-8 sm:w-60 sm:text-[16px] lg:h-10"
          >
            Existing Inventory
          </button>
       
      </div>
    </div>
  );
}

export default NavBar;
