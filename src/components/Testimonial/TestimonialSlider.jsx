import { testimonialData } from "../../utils/constants";
import { settings } from "../../utils/settings";
import Slider from "react-slick";

const TestimonialSlider = () => {
  return (
    <Slider {...settings}>
      {testimonialData.map(({ id, name, text, img }) => {
        return (
          <div key={id} className="my-6">
            <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
              <img src={img} alt="" className="rounded-full block mx-auto" />
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="text-gray-500 text-sm">{text}</p>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default TestimonialSlider;
