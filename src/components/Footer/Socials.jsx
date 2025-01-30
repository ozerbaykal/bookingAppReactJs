import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-6">
        <a href="#">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="#">
          <FaFacebook className="text-3xl" />
        </a>
        <a href="#">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
