import MovieBackround from "../assets/videos/video1.mp4";
import Hero from "../components/Hero";
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
      </div>
    </>
  );
};

export default Home;
