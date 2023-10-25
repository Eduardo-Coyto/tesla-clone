function SectionFourth() {
  return (
    <div id="SectionFourth" className="relative w-full h-screen overflow-hidden">
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
      <div className="md:space-x-4 w-full absolute bottom-[80px] left-[75%] translate-x-[-50%] flex flex-col md:flex-row lg:left-[70%] xl:left-[95%] xl:bottom-[105px]">
        <button className="bg-transparent w-64 h-10 border-4">
          Demo Drive
        </button>
      </div>
    </div>
  );
}

export default SectionFourth;
