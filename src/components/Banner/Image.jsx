import TravelImg from "../../assets/images/travel1.jpg";

const Image = () => {
  return (
    <div data-aos="flip-up">
      <img
        src={TravelImg}
        alt="travel-box"
        className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.5)] object-cover rounded-md"
      />
    </div>
  );
};

export default Image;
