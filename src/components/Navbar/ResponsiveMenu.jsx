import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BarLinks } from "../../utils/constants";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0  flex h-screen w-[75%] flex-col justify-between bg-white z-20 dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl ">
            {BarLinks.map((data, key) => (
              <li key={key} className="bg-primary bg-opacity-80 rounded-md ">
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="my-3 mx-4 inline-block text-white hover:text-black transition-all hover:scale-110 "
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
