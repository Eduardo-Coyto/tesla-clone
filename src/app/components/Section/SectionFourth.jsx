function SectionFourth() {
  return (
    <div
      id="SectionFourth"
      className="relative w-full h-screen overflow-hidden"
    >
      <div class="flex flex-col absolute top-20 left-[50%] translate-x-[-50%] xl:top-40">
        <h1 class="text-[36px] m-auto font-bold sm:text-[40px] xl:text-[58px]">
          Experience Tesla
        </h1>
        <p class="whitespace-nowrap pt-1 text-[15px] text-slate-300 sm:text-[16px] xl:text-[24px] ">
          Order Online for
          <span class="underline underline-offset-4 hover:decoration-2 cursor-pointer pl-1">
            Schedule a Demo Drive Today
          </span>
        </p>
      </div>
      <video
        className="object-cover w-full h-full"
        id="background-video"
        autoPlay
        loop
        muted
      >
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
          type="video/mp4"
        />
      </video>
      <div className="md:space-x-4 w-full absolute bottom-[150px] left-[75%] translate-x-[-50%] flex flex-col md:flex-row md:left-[85%] lg:left-[87%] xl:left-[92%] xl:bottom-[120px]">
        <button className="bg-transparent w-64 h-10 border-4">
          Demo Drive
        </button>
      </div>
      <div class=" absolute bottom-[-10px] left-[42%] flex pb-10 justify-center items-center md:left-[15%] lg:left-[22%] xl:left-[30%]">
        <ul class="flex flex-col justify-center items-center md:flex-row md:space-x-4  text-[12px] text-gray-500 md:text-[14px] md:mb-3 xl:text-[18px]">
          <li class="link">Tesla &copy 2022</li>
          <li class="link">Privacy & Legal</li>
          <li class="link">Contact</li>
          <li class="link">Careers</li>
          <li class="link">News</li>
          <li class="link hidden md:inline">Engage</li>
          <li class="link hidden md:inline">Location</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionFourth;
