import MovieBackround from "../assets/videos/video1.mp4";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MovieBackround} />
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
