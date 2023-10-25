import Link from "next/link";

function NavBar() {
  return (
    <div className="absolute pt-5 w-full flex justify-between font-bold font-TeslaFont items-center z-10">
      <div className="fixed  mx-7 w-screen flex justify-between items-center ">
        <Link href="/">
          <div className="mx-3 lg:ml-10">
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
        </Link>
        <div className="hidden lg:inline">
          <ul className="flex space-x-2 text-sm">
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer md:text-[15px] md:px-1 xl:text-[19px] xl:px-4">
              <a href="#SectionOne">Model Y</a>
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer md:text-[15px] md:px-1 xl:text-[19px] xl:px-4">
              <a href="#SectionTwo">Model 3</a>
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer md:text-[15px] md:px-1 xl:text-[19px] xl:px-4">
              <a href="#SectionThree">Model X</a>
            </li>

            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer md:text-[15px] md:px-1 xl:text-[19px] xl:px-4">
              <a href="#SectionFourth">Experience Tesla</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex space-x-4  text-sm mr-14">
            <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 md:text-[17px] xl:text-[21px]">
              Shop
            </li>
            <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 md:text-[18px] xl:text-[21px]">
              Account
            </li>
            <li class="cursor-pointer hover:rounded-full hover:bg-slate-300 md:text-[18px] xl:text-[21px]">
              Menu
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col absolute top-[100px] left-[50%] translate-x-[-50%] lg:left-[50%] lg:top-[120px] xl:top-[175px] ">
        <h1 className="text-[36px] m-auto font-bold sm:text-[40px] xl:text-[58px]">
          Model Y
        </h1>
        <p className="whitespace-nowrap pt-1 text-[15px] text-slate-300 sm:text-[16px] xl:text-[24px] ">
          Order Online for
          <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer pl-1">
            Touchless Delivery
          </span>
        </p>
      </div>
      <div className="absolute bottom-[-675px] left-[40%] translate-x-[-30%] sm:translate-x-[-35%] md:translate-x-[-25%]  lg:translate-x-[-20%] lg:bottom-[-650px]  xl:left-[38%] xl:bottom-[-775px]">
        <button className="uppercase mb-3 bg-gray-800  text-white text-[16px] rounded-full w-72 h-12  sm:text-[16px] mr-5 md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
          Custom order
        </button>
        <button class="my-2 uppercase bg-slate-200 text-gray-900 text-[16px] rounded-full w-72 h-12  sm:text-[16px] md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
          Existing Inventory
        </button>
      </div>
      <div className="absolute left-[40%] translate-x-[100%] bottom-[-725px] md:left-[40%] lg:bottom-[-725px] lg:left-[45%] xl:bottom-[-850px] xl:left-[46%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3.5"
          stroke="currentColor"
          class="w-8 h-8 md:w-10 md:h-10 text-slate-500 animate-bounce xl:w-14 xl:h-14"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavBar;
