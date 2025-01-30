import MovieBackround from "../assets/videos/video1.mp4";
import BannerPic from "../components/BannerImg/BannerImg";
import Hero from "../components/Hero";
import Places from "../components/Places";
import img from "../assets/images/banner2.jpg";
import img2 from "../assets/images/banner3.jpg";
import BlogsComp from "../components/BlogsComp";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Popup from "../components/PopUp";
import { useState } from "react";
const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MovieBackround} />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={img} />
        <BlogsComp />
        <Banner />
        <BannerPic img={img2} />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
