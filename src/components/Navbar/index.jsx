import Logo from "./Logo";
import { BarLinks } from "../../utils/constants";
import NavBarLink from "./NavbarLink";
import TopBar from "./TopBar";
import Dropdown from "./Dropdown";
import Button from "../Button";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]">
        {/* TopBarInfo */}
        <TopBar />

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Logo />

            {/* NavLinks and Dropdown  */}
            <div className="hidden md:block">
              <div className="flex gap-6 py-4 ">
                {BarLinks.map((link, key) => (
                  <NavBarLink key={key} link={link} />
                ))}
                {/* Dropdown */}
                <div>
                  <Dropdown />
                </div>
              </div>
            </div>

            {/* BookNow Button */}
            <div className="flex items-center gap-4">
              <Button item={"Book Now"} handleOrderPopup={handleOrderPopup} />

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toogleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toogleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
