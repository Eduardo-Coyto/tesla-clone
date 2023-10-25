function SectionOne() {
  return (
    <div className="w-full h-screen overflow-hidden" id="SectionOne">
      <video
        className="object-cover w-full h-full"
        id="background-video"
        autoPlay
        loop
        muted
      >
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default SectionOne;
