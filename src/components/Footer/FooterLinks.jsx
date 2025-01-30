import { Link } from "react-router-dom";
import { FooterLinksData } from "../../utils/constants";

const FooterLinks = ({ title }) => {
  return (
    <div>
      <div className="py-8 px-4">
        <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
          {title}
        </h1>
        <ul className="flex flex-col gap-3">
          {FooterLinksData.map((link, key) => (
            <li
              key={key}
              className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200"
            >
              <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                <span>&#11162;</span>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
