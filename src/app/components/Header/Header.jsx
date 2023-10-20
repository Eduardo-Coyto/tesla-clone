import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="relative">
      <NavBar />
      <video className="w-full" id="background-video" autoPlay loop muted>
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Header;
