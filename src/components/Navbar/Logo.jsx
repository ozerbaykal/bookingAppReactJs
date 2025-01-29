import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/Gologo.png";

const Logo = () => {
  return (
    <div>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img src={LogoImg} alt="Gologo" className="h-16" />
      </Link>
    </div>
  );
};

export default Logo;
