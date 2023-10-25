
function SectioThree() {
  return (
    <div id="SectionThree" class="relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD')] h-screen bg-center bg-cover">
    <div class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] xl:top-40">
      <h1 class="text-[36px] m-auto font-bold sm:text-[40px] xl:text-[58px]">Model X</h1>
      <p class="whitespace-nowrap pt-1 text-[15px] text-slate-500 sm:text-[16px] xl:text-[24px] ">
        Order Online for
        <span class="underline underline-offset-4 hover:decoration-2 cursor-pointer pl-1">
          Touchless Delivery
        </span>
      </p>
    </div>

    <div class="md:space-x-4 w-full absolute bottom-[80px] left-[67%] translate-x-[-50%] flex flex-col md:flex-row lg:left-[70%] xl:left-[80%]">
      <button class="uppercase mb-3 bg-gray-800  text-white text-[16px] rounded-full w-72 h-12  sm:text-[16px] mr-5 md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
        Custom order
      </button>
      <button class="my-2 uppercase bg-slate-200 text-gray-900 text-[16px] rounded-full w-72 h-12  sm:text-[16px] md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
        Existing Inventory
      </button>
    </div>
  </div>
  )
}

export default SectioThree
