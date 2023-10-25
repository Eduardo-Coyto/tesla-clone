
import NavBar from "../NavBar/NavBar";
import SectioThree from "../Section/SectioThree";
import SectionFourth from "../Section/SectionFourth";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";

function Header() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectioThree />
      <SectionFourth />

    </div>
  );
}

export default Header;
