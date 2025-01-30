import FooterLinks from "./FooterLinks";
import FooterLeft from "./FooterLeft";
import FooterVideo from "./FooterVideo";

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-10 relative overflow-hidden">
        {/* footer backroundImgVideo */}
        <FooterVideo />
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            {/* Footer left section */}
            <FooterLeft />
            {/* Footer right section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <FooterLinks title="Travellers" />
              <FooterLinks title="Informations" />
              <FooterLinks title="Connections" />
            </div>
          </div>
          <div>
            <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
              @copyright 2025 All rights reserved || Made with by Ozer
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
