import MovieBackround from "../assets/videos/video1.mp4";
import BannerPic from "../components/BannerImg/BannerImg";
import Hero from "../components/Hero";
import Places from "../components/Places";
import img from "../assets/images/banner2.jpg";
import BlogsComp from "../components/BlogsComp";
import Banner from "../components/Banner";
const Home = () => {
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
        <Places />
        <BannerPic img={img} />
        <BlogsComp />
        <Banner />
      </div>
    </>
  );
};

export default Home;
