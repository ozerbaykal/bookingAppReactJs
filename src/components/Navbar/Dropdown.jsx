import { FaCaretDown } from "react-icons/fa";
import { DropdownLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className=" relative group cursor-pointer">
      <Link className=" dropdown flex items-center ">
        <span>Quik Links</span>
        <span>
          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
        </span>
      </Link>
      <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
        {DropdownLinks.map((link, key) => (
          <Link
            key={key}
            to={link.link}
            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
