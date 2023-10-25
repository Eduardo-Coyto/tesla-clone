function SectionTwo() {
  return (
    <div id="SectionTwo" class="relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')] h-screen bg-center bg-cover">
      <div class="flex flex-col absolute top-40 left-[50%] translate-x-[-50%]">
        <h1 class="text-[36px] m-auto font-bold sm:text-[40px] xl:text-[58px]">Model 3</h1>
        <p class="whitespace-nowrap pt-1 text-[15px] text-slate-300 sm:text-[16px] xl:text-[24px] ">
          Order Online for
          <span class="underline underline-offset-4 hover:decoration-2 cursor-pointer pl-1">
            Touchless Delivery
          </span>
        </p>
      </div>

      <div class="md:space-x-4 w-full absolute bottom-[70px] left-[67%] translate-x-[-50%] flex flex-col md:flex-row md:left-[50%] lg:left-[70%] xl:left-[77%]">
        <button class="uppercase mb-3 bg-gray-800  text-white text-[16px] rounded-full w-72 h-12  sm:text-[16px] mr-5 md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
          Custom order
        </button>
        <button class="my-2 uppercase bg-slate-200 text-gray-900 text-[16px] rounded-full w-72 h-12  sm:text-[16px] md:h-16 md:w-96 md:text-[19px] lg:h-18 lg:w-72 lg:text-[21px] xl:w-[380px] xl:h-20 xl:text-[26px]">
          Existing Inventory
        </button>
      </div>
    </div>
  );
}

export default SectionTwo;
